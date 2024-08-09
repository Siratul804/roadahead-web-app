import { auth } from "@/app/auth";
import Map from "@/app/ui/Map";
import Link from "next/link";

const page = async () => {
  let user = null;

  try {
    const authResponse = await auth();
    user = authResponse.user;
  } catch (error) {
    console.log("No user logged in");
  }

  const lat = 23.8103; // Example latitude
  const lng = 90.4125; // Example longitude

  return (
    <>
      {user ? (
        <>
          <div className=" font-mono bg-black py-5 ">
            <div className="max-w-md mx-auto flex justify-center pb-10 pt-5 ">
              <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <input
                  class="peer h-full w-full outline-none text-sm text-gray-700 pl-2"
                  type="text"
                  id="search"
                  placeholder="Search Location..."
                />
                {/* btn */}
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
                {/* btn */}
              </div>
            </div>
            <div className="flex justify-center py-6 ">
              <Map lat={lat} lng={lng} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center h-screen flex-col font-mono ">
            <h1>Please Login !</h1>

            <Link href="/sign-in" className="py-4 text-[10px] ">
              <p className="text-blue-500"> click here </p>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default page;
