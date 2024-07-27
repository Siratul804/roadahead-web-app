"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div>
        <ul className="flex justify-between pl-10 pr-10 pt-4 pb-4 bg-black ">
          <li>
            <p className="text-white font-bold text-lg p-2 ">
              Road<span className="text-[#5E17EB]">Ahead</span>
            </p>
          </li>
          <li className="flex pt-1 ">
            <Link
              className={`text-[14px] pr-4 ${
                pathname === "/map" ? "text-[#5E17EB]" : "text-white"
              }`}
              href="/map"
            >
              <div className="pl-3 pr-3 pt-2 pb-2 hover:bg-[#302f2f] text-white rounded-full transition duration-300">
                Map
              </div>
            </Link>
            <Link
              className={`text-[14px]  pr-4 ${
                pathname === "/sign-in" ? "text-[#5E17EB]" : "text-white"
              }`}
              href="/sign-in"
            >
              <div className="pl-3 pr-3 pt-2 pb-2 hover:bg-[#302f2f] text-white rounded-full transition duration-300">
                Log in
              </div>
            </Link>
            <Link
              className={` text-[14px] pr-4 pl-1 ${
                pathname === "/sign-up" ? "text-[#5E17EB]" : "text-white"
              }`}
              href="/sign-up"
            >
              <div className="pl-3 pr-3 pt-2 pb-2 bg-white text-black rounded-full transition duration-300">
                Sign up
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
