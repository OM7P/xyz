"use client";

import React, { useEffect, useState } from "react";
import Logo from "../component/logo";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Googleicon from "../component/googleicon";
import { useRouter } from "next/navigation";
import SiteLoading from "../component/mainloader";

const AuthPage = () => {
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
    <div className="flex justify-center items-center h-[700px]">
      <div className="flex justify-center items-center flex-col rounded-lg bg-[#ebf3f874] w-[550px] h-[630px] gap-3 ">
        <div>
          <Logo />
        </div>
        <div className="text-black text-2xl font-semibold font-moon">
          Create an account
        </div>
        <div>
          <label>Name</label>
          <Input
            type="text"
             value="Mukesh kumar"
            placeholder="Name"
            className="border-gray-500	placeholder-red"
          />
        </div>
        <div>
          <label>Email</label>
          <Input type="email" placeholder="Email" className="border-gray-500	"   value="hello@example.com"/>
        </div>
        <div>
          <label>Password</label>
          <Input
            type="password"
            placeholder="Password"
             value="jf984f934"
            className="border-gray-500	"
          />
        </div>
        <div className=" flex font-moon gap-2 ">
          By continuing,you agree to our
          <div className="text-pink-400"> tems of service.</div>
        </div>
        <div>
          <Button className="text-white bg-rose-500  hover:bg-pink-400   w-[400px]  h-[50px] text-xl" onClick={()=>{
            router.push('/')
          }}>
            Sign up
          </Button>
        </div>
        <div className="relative w-[400px] flex justify-between items-center gap-1 my-3">
          <span className="w-[40%] h-[0.5px] bg-[#B0AAAA]"></span>
          <p className="relative whitespace-nowrap">or sign up with</p>
          <span className="w-[40%] h-[0.5px] bg-[#B0AAAA]"></span>
        </div>
        <div>
          <Googleicon />
        </div>
        <div className=" flex font-moon gap-2">
          Already have an account?
          <div
            className="text-pink-400 cursor-pointer"
            onClick={() => {
              router.push('/signin');
            }}
          >
            {" "}
            Sign in here.
          </div>
        </div>
      </div>
    </div>
  );
};
}
export default AuthPage;
