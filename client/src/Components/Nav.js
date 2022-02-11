export default function Nav() {
  return (
    <div className=" fixed top-0 z-10 h-[8vh] w-screen ">
      <div className=" bg-orange-500 border-orange-600 flex h-[8vh] flex-row items-center justify-end border-b-4  pr-20  text-white ">
        <ul className="mr-40 flex w-[30rem] justify-between">
          <li className="nav-link">A</li>

          <li className="nav-link">B</li>

          <li className="nav-link">C</li>
        </ul>
        <div>Sign In</div>
      </div>
    </div>
  );
}
