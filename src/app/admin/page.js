import { getAuthSession } from "@/lib/auth";
import Image from "next/image";

const Admin = async () => {
  const session = await getAuthSession();
  return (
    <main className="relative">
      <div className="absolute right-0 flex font-medium items-center gap-2">
        Welcome, {session?.user?.name}
        <Image
          src={session?.user?.image}
          alt="profile image"
          width={50}
          height={50}
          className="rounded-full object-contain ring-black ring-2"
        />
      </div>
    </main>
  );
};
export default Admin;
