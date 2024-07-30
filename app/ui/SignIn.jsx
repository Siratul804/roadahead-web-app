import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";

function SignIn() {
  return (
    <>
      <div>
        {/* ....... */}

        {/* <Link href="/">
          <TiArrowBack size={32} color="black" />
        </Link> */}
        <div className="absolute p-8 ">
          <Link href="/">
            <div className="p-2 bg-white hover:bg-[#eee] rounded-full ">
              <TiArrowBack size={32} color="black" />
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col space-y-2">
            <p className="text-black font-extrabold	font-serif text-[3vh] p-2 ">
              What's your phone email & <br /> password?
            </p>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-4 py-2 w-[42vh] border border-[#eee] bg-[#eee] rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="px-4 py-2 w-[42vh] border border-[#eee] bg-[#eee] rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button class="bg-gray-800 hover:bg-black text-slate-100 hover:text-white font-bold py-2 px-4 border border-black rounded-lg w-[42vh] shadow ">
              Login In
            </button>
            <div className="border-b-2 py-2 border-black w-[42vh] "></div>
            <p className="py-2 text-[12px] text-black ">
              By logging in you would be unlock the amazing functionalities.
              <br /> Including alerts, searching, notifications, weather etc.
            </p>
          </div>
        </div>
        {/* ....... */}
      </div>
    </>
  );
}

export default SignIn;
