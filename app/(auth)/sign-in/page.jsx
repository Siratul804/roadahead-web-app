import SignIn from "@/app/ui/SignIn";
import { auth } from "@/app/auth";
async function page() {
  let user = null;

  try {
    const authResponse = await auth();
    user = authResponse.user;
  } catch (error) {
    console.log("No user logged in");
  }

  return (
    <>
      <SignIn user={user} />
    </>
  );
}

export default page;
