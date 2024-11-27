import Link from "next/link";
import { auth } from "@/app/auth";
import { IoIosLogOut } from "react-icons/io";

const Navbar = async () => {
  let user = null;

  try {
    const authResponse = await auth();
    user = authResponse.user;
  } catch (error) {
    console.log("No user logged in");
  }

  return (
    <>
      <div>
        <ul className="flex justify-between pl-10 pr-10 pt-4 pb-4 bg-black ">
          <Link href="/">
            <li>
              <p className="text-white font-bold text-lg p-2 ">
                Road<span className="text-[#70ABBB]">Ahead</span>
              </p>
            </li>
          </Link>
          <li className="flex pt-1  ">
            <Link className="text-[14px] text-white" href="/pages/map">
              <div className="pl-3 pr-3 pt-2 pb-2 hover:bg-[#302f2f] text-white rounded-full transition duration-300">
                Map
              </div>
            </Link>
            <a
              className="text-[14px] text-white"
              target="_blank"
              href="https://car-rentals-beta.vercel.app/home"
            >
              <div className="pl-3 pr-3 pt-2 pb-2 hover:bg-[#302f2f] text-white rounded-full transition duration-300">
                Rent Car
              </div>
            </a>

            <a
              className="text-[14px] text-white"
              href="https://voluble-crisp-63c7a2.netlify.app"
              target="_blank"
            >
              <div className="pl-3 pr-3 pt-2 pb-2 hover:bg-[#302f2f] text-white rounded-full transition duration-300">
                Food
              </div>
            </a>

            {user ? (
              <>
                <div className="pl-2 pr-2"></div>
                <Link
                  href="/sign-out"
                  className="hover:bg-[#302f2f] rounded-full text-white text-sm p-2"
                >
                  <IoIosLogOut size={22} color="red" />
                </Link>
                <div className="pl-2 pr-2"></div>
              </>
            ) : (
              <>
                <div className="pl-2 pr-2"></div>
                <Link className="text-[14px] text-white" href="/sign-in">
                  <div className="pl-3 pr-3 pt-2 pb-2 hover:bg-[#302f2f] text-white rounded-full transition duration-300">
                    Log in
                  </div>
                </Link>
                <div className="pl-2 pr-2"></div>
                <Link className="text-[14px] text-white" href="/sign-up">
                  <div className="pl-3 pr-3 pt-2 pb-2 bg-white text-black rounded-full transition duration-300">
                    Sign up
                  </div>
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
