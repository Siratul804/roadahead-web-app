"use client";
import { authenticate } from "@/app/lib/actions";
import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";
import { useFormState } from "react-dom";

function SignIn({ user }) {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <>
      <div>
        {/* ....... */}

        {user ? (
          <>
            <div className="flex items-center justify-center h-screen flex-col font-mono ">
              <p className="text-black text-[4vh] "> Successfully Login ! </p>

              <Link href="/" className="py-4">
                <p className="text-blue-500"> Back to home page</p>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="absolute p-8 ">
              <Link href="/">
                <div className="p-2 bg-white hover:bg-[#eee] rounded-full ">
                  <TiArrowBack size={32} color="black" />
                </div>
              </Link>
            </div>

            <div className="flex items-center justify-center h-screen">
              <form action={formAction}>
                <div className="flex flex-col space-y-2">
                  <div className="text-black font-extrabold	font-serif text-[3vh] p-2 ">
                    What's your phone email & <br /> password?
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="px-4 py-2 w-[42vh] border border-[#eee] bg-[#eee] rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="px-4 py-2 w-[42vh] border border-[#eee] bg-[#eee] rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <button class="bg-gray-800 hover:bg-black text-slate-100 hover:text-white font-bold py-2 px-4 border border-black rounded-lg w-[42vh] shadow ">
                    Sign in
                  </button>
                  <div className="border-b-2 py-2 border-black w-[42vh] "></div>
                  <div className="py-2 text-[12px] text-black ">
                    By logging in you would be unlock the amazing
                    functionalities.
                    <br /> Including alerts, searching, notifications, weather
                    etc.
                    <br />
                    <div className="text-center pt-4 text-[14px] ">
                      Haven't Sign Up?
                      <Link href="/sign-up">
                        {" "}
                        <b className="font-black text-blue-600 ">Sign Up</b>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}

        {/* ....... */}
      </div>
    </>
  );
}

export default SignIn;
