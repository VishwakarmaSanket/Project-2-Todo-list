"use client";
import React, { useState } from "react";
import Cards from "@/components/Cards";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [MainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Prevent adding empty title or description
    if (title.trim() === "" || desc.trim() === "") {
      return;
    }
    setMainTask([...MainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(MainTask);
  };

  const DeleteHandler = (i) => {
    let copyTask = [...MainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
    console.log(copyTask);
  };

  let renderTask = <h2>No task available</h2>;

  const cardColors = [
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-pink-300",
    "bg-purple-300",
    "bg-orange-300",
    "bg-teal-300",
    "bg-red-300",
  ];

  if (MainTask.length > 0) {
    renderTask = (
      <div className="flex flex-wrap gap-6">
        {MainTask.map((t, i) => (
          <Cards
            key={i}
            title={t.title}
            desc={t.desc}
            idx={i}
            DeleteHandler={DeleteHandler}
            color={cardColors[i % cardColors.length]}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <h1 className="font-semibold text-4xl bg-black text-white p-5 text-center">
        My Todo List
      </h1>
      <form onSubmit={submitHandler} className="p-10">
        <input
          type="text"
          className="border-2 border-black p-2 m-5 w-xl rounded-lg"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-2 border-black p-2 m-5 w-xl rounded-lg"
          placeholder="Description of the task"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white font-bold px-5 py-2.5 rounded-lg">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-10 bg-slate-200">
        {renderTask}
      </div>
    </>
  );
};

export default page;
