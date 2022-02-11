
import Card from "./Components/CollectionCard"
import {React, useRef}  from "react"


export default function Collections() {
 const addCard = useRef("Add")
  return (
    <div className="relative top-14 left-[13vw] w-[87vw] h-[92vh] flex justify-center ">

        <div className=" mt-24 w-11/12 bg-gray-200 shadow-xl h-fit rounded-xl">

            <nav className="flex items-center h-10 bg-orange-500  rounded-t-xl">
                <h3 className="ml-10 text-white text-xl">Collections</h3>
            </nav>

            <div className=" auto-rows-[15rem] grid grid-cols-[repeat(3,minmax(20rem,1fr))] gap-10 p-10">
               <Card />
                
               <div className=" flex items-center justify-center rounded-md bg-white shadow-xl ">
               Add
               </div>
               
            </div>       
        </div>     
    </div>
  );
}

