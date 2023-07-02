import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getAuthSession();
  if (session) {
    return (
      <div className="max-w-[100rem] mx-auto px-4 lg:px-2 mt-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Profile
        </h1>
        <div className="max-w-[60rem] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          {!!session && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <div className="min-w-[150px]">
                <Image
                  src={session?.user?.image}
                  width={125}
                  height={125}
                  alt="profile image"
                  className="rounded-full object-contain ring-black ring-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="md:text-3xl md:flex gap-1">
                  <span className="underline underline-offset-4 font-extrabold">
                    Name:
                  </span>{" "}
                  {session?.user?.name}
                </p>
                <p className="md:text-3xl md:flex gap-1">
                  <span className="underline underline-offset-4 font-extrabold">
                    Email:
                  </span>{" "}
                  {session?.user?.email}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  redirect("/signin");
};
export default Profile;
