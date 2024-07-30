import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";

function SignUp() {
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
              Sign Up With Road<span className="text-[#70ABBB]">Ahead</span>
            </p>
            <input
              type="text"
              placeholder="Enter Your Username"
              className="px-4 py-2 w-[42vh] border border-[#eee] bg-[#eee] rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              className="px-4 py-2 w-[42vh] border border-[#eee] bg-[#eee] rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-4 py-2 w-[42vh] border border-[#eee] bg-[#eee] rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Create Your Password"
              className="px-4 py-2 w-[42vh] border border-[#eee] bg-[#eee] rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button class="bg-gray-800 hover:bg-black text-slate-100 hover:text-white font-bold py-2 px-4 border border-black rounded-lg w-[42vh] shadow ">
              Sign Up
            </button>
            <div className="border-b-2 py-2 border-black w-[42vh] "></div>
            <p className="py-2 text-[14px] text-black text-center ">
              Already have an account ?{" "}
              <Link href="/sign-in">
                <b className="font-bolder">Log in</b>
              </Link>
            </p>
          </div>
        </div>
        {/* ....... */}
      </div>
    </>
  );
}

export default SignUp;
