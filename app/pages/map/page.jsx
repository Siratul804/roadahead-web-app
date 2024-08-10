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

  return (
    <>
      {user ? (
        <>
          <Map />
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
