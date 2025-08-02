import React, { useState } from "react";

const Cards = (props) => {
  const [status, setstatus] = useState("Remaining");
  // Hide card if no title and no desc
  if (!props.title && !props.desc) {
    return null;
  }
  return (
    <>
      <div
        className={`${
          props.color || "bg-blue-300"
        } h-auto w-auto p-4 rounded-lg`}
      >
        <h6 className="font-semibold text-end text-sm mb-2 text-blue-950">
          {status}
        </h6>
        <div className="p-2">
          <h1 className="font-bold text-2xl mb-3">{props.title}</h1>
          <h3 className="font-medium text-sm">{props.desc}</h3>
        </div>
        <div className="flex items-center justify-end px-2 py-8">
          <button
            className="bg-blue-800 text-white font-semibold text-sm px-4 py-2 rounded-lg mr-2"
            onClick={() => {
              setstatus("Completed");
            }}
          >
            Completed
          </button>
          <button
            onClick={() => {
              if (props.DeleteHandler) {
                props.DeleteHandler(props.idx);
              }
            }}
            className="bg-red-500 text-white font-semibold text-sm px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
