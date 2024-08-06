import { signOut, auth } from "@/app/auth";
import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";
import Footer from "../../ui/Footer";
import Home from "../../ui/Home";
import Navbar from "../../ui/Navbar";
async function page() {
  let user = null;

  try {
    const authResponse = await auth();
    user = authResponse.user;
  } catch (error) {
    console.log("No user logged in");
  }

  if (user) {
    console.log("logout Successfully");
  }

  return (
    <>
      {user ? (
        <>
          <div className="absolute p-8 ">
            <Link href="/">
              <div className="p-2 bg-white hover:bg-[#eee] rounded-full ">
                <TiArrowBack size={32} color="black" />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center h-screen flex-col font-mono ">
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <p>Are you sure about that ?</p>
              <div className="text-center py-4 ">
                <button className="hover:bg-[#302f2f] hover:text-white rounded-md text-black text-sm p-2">
                  Log Out
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}

export default page;
