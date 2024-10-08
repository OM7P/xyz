"use client";

import React, { useEffect, useState } from "react";
import Logo from "../component/logo";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";
import SiteLoading from "../component/mainloader";

const ForgotPage = () => {
  const router = useRouter()
 // const { loading } = useStore();
    // if (loading) return <div>Loading....</div>;
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      // Simulate a data fetch
      setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 seconds delay
    }, []);


    if (loading) {
      return <SiteLoading />;
    } else {
  return (
    <div className="flex justify-center items-center h-[720px]">
      <div className="flex justify-center items-center flex-col rounded-lg bg-[#ebf3f874] w-[550px] h-[500px] gap-8">
        <div>
          <Logo />
        </div>
        <div className="text-black relative top-[10px] text-2xl font-semibold font-moon">
          Forgot Password?
        </div>
        <div className="relative bottom-[10px] text-black text-[13px] h-[10px]">
          Enter your Email address to get the passowrd reset link.
        </div>

        <div >
          <label className="relative bottom-[5px]">Email Address</label>
          <Input
            type="email"
            value="hello@example.com"
            placeholder="Email Address"
            className="border-gray-500	"
          />
        </div>

        <div>
          <Button className="text-white bg-rose-500  hover:bg-pink-400   w-[400px]  h-[50px] text-xl">
            Password Reset
          </Button>
        </div>

        <div className=" flex font-moon gap-2">
          <div
            className="text-black cursor-pointer"
            onClick={() => {
              router.push('/signin');
            }}
          >
            {" "}
            Back to login.
          </div>
        </div>
      </div>
    </div>
  );
};
}
export default ForgotPage;
