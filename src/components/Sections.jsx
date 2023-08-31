import React from "react";

import picture2 from "../assets/pic2.png";
import picture3 from "../assets/pic3.png";

const Sections = () => {
  return (
    <div className="mt-32">
      <div className="flex sm:flex-row flex-col">
        <div>
          <img src={picture2} alt="Picture 2" className="h-80 w-96"/>
        </div>
        <div className="ml-auto">
        <p className='text-gray-400 uppercase opacity-70'>Analystics track</p>
          <h1 className="font-bold text-gray-200 text-4xl capitalize leading-[3rem] sm:w-96">
            build-in analystics to track your NFTs
          </h1>
          <p className="text-gray-300 mt-10 md:w-[22rem] sm:w-96 opacity-90">
            Use our built-in dashboard to pull variables insights and monitor
            the value of your Krypto portfolio over time.
            <button className='uppercase rounded-full bg-purple-400 opacity-80 text-white px-7 py-2 hover:opacity-100 mt-10 w-full'>
              view our pricing
            </button>
          </p>
        </div>
      </div>
      <div className="flex mt-40 sm:flex-row flex-col">
      <div className="mr-auto">
        <p className='text-gray-400 opacity-70 uppercase'>Dashboard track</p>
          <h1 className="font-bold text-gray-200 text-4xl capitalize leading-[3rem] sm:w-96">
            build-in analystics to track your NFTs
          </h1>
          <p className="text-gray-300 mt-10 md:w-[22rem] sm:w-96 opacity-90">
            Use our built-in dashboard to pull variables insights and monitor
            the value of your Krypto portfolio over time.
            <button className='uppercase rounded-full bg-purple-400 opacity-80 text-white px-7 py-2 hover:opacity-100 mt-10 w-full'>
              view our pricing
            </button>
          </p>
        </div>        <div>
          <img src={picture3} alt="Picture 3" className="h-80" />
        </div>
      </div>
    </div>
  );
};

export default Sections;
