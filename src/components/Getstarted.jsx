import React from "react";

const Getstarted = () => {
  return (
    <div className="h-[20rem] mt-20 rounded-xl bg-gradient-to-l from-blue-300 to-violet-600">
      <div className="flex flex-col items-center pt-16">
        <p className="text-xl uppercase mb-10 font-light">Are you ready ?</p>
        <h1 className="text-white capitalize text-4xl font-extrabold w-96 text-center">
          be a part of the next big thing
        </h1>
        <button className="uppercase rounded-full bg-black text-white px-7 py-2 hover:opacity-100 mt-10 ">
          get started
        </button>
      </div>
    </div>
  );
};

export default Getstarted;
