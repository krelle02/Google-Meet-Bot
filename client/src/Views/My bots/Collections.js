import { React, useState } from "react";
import BotsList from "./Components/CollectionsList";

export default function Collections() {
  return (
    <div className="relative top-14 left-[13vw] flex h-[92vh] w-[87vw] justify-center ">
      <div className=" h-fit mt-24 w-11/12 rounded-xl bg-gray-200 shadow-xl">
        <nav className="bg-orange-500 flex h-10 items-center  rounded-t-xl">
          <h3 className="ml-10 text-xl text-white">Collection</h3>
        </nav>

        <BotsList />
      </div>
    </div>
  );
}
