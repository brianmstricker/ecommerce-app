"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Page = () => {
  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === "login" ? "register" : "login"));
  }, []);
  return (
    <div className="w-[100vw] sm:max-w-lg mx-auto h-[92.3vh] sm:h-fit bg-slate-900 sm:mt-10 sm:rounded-md">
      <div className="pt-12 sm:pt-16 pb-8 p-4 pl-4 sm:ml-12 flex flex-col items-center sm:block">
        <h1 className="text-4xl text-white">
          {variant === "login" ? "Sign In" : "Register"}
        </h1>
        <form className="flex flex-col text-2xl items-center sm:items-start sm:block">
          <div className="flex flex-col gap-4 mt-8 w-[90vw] max-w-sm">
            {variant === "register" && (
              <Input type="name" placeholder="Username" required />
            )}
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button
              className="mt-4"
              text={variant === "login" ? "Log In" : "Create account"}
            />
          </div>
        </form>
        <div className="mt-4 sm:mt-12 text-lg max-w-sm w-[90vw]">
          <p className="text-gray-400">
            {variant === "login"
              ? "New to BUYBEST?"
              : "Already have an account?"}{" "}
            <span
              onClick={toggleVariant}
              className="text-white hover:underline underline-offset-2 cursor-pointer"
            >
              {variant === "login" ? "Create an account" : "Sign in"}
            </span>
          </p>
          <div className="mt-14">
            <p className="text-gray-400">Or Sign in with</p>
            <div className="bg-white rounded-md flex items-center justify-center p-2 cursor-pointer gap-2 mt-2">
              <FcGoogle className="text-4xl" />
              <p className="text-3xl">Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
