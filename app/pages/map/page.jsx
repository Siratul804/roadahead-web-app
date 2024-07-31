import { fetchUsers } from "@/app/lib/data";

const page = async () => {
  const users = await fetchUsers();
  console.log(users);
  return <>Map</>;
};

export default page;
