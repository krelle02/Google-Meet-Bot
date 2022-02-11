export default function Dashboard() {
  return (
    <div className="  bg-slate-800 fixed left-0 z-20 flex h-screen  w-[13vw] flex-col  items-center gap-24 text-white">
      <div className=" text-orange-500 mt-3 h-10 border-b-4 border-dotted border-white text-3xl  ">
        MboT
      </div>
      <div className=" flex h-[50rem] flex-col items-center gap-5 text-xl">
        <div className="hover:text-slate-800 flex h-20 w-[13vw] items-center justify-center hover:bg-gray-200">
          Dashboard
        </div>
        <div className="hover:text-slate-800 flex h-20 w-[13vw] items-center justify-center hover:bg-gray-200">
          My Bots
        </div>
        <div className="hover:text-slate-800 flex h-20 w-[13vw] items-center  justify-center hover:bg-gray-200">
          Settings
        </div>
      </div>
    </div>
  );
}
