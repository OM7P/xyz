"use client";

import React, { useEffect, useState } from "react";
import Logo from "../component/logo";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Googleicon from "../component/googleicon";
import { useRouter } from "next/navigation";
import SiteLoading from "../component/mainloader";

const SignInPage = () => {
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
      <div className="flex justify-center items-center flex-col rounded-lg bg-[#ebf3f874] w-[550px] h-[600px] gap-5 ">
        <div>
          <Logo />
        </div>

        <div>
          <label>Email Address</label>
          <Input
            type="email"
             value="hello@example.com"
            placeholder="Email Address"
            className="border-gray-500	"
          />
        </div>
        <div>
            <div className="flex justify-between">
          <label>Password</label> 
          <div className="text-pink-400 text-[15px] cursor-pointer"  onClick={() => {
            router.push('/forgotpage');
            }}>Forgot passowrd?</div>

            </div>
          <Input
            type="password"
             value="dciuyf874f4"
            placeholder="Password"
            className="border-gray-500	"
          />
        </div>
        <div className=" flex justify-start items-center font-moon mr-[230px]">
          <input type="checkbox" className="h-5 w-10"/>
          <div className="text-pink-400"> Keep me signed in.</div>
        </div>
        <div>
          <Button className="text-white bg-rose-500  hover:bg-pink-400   w-[400px]  h-[50px] text-xl" onClick={()=>{
            router.push('/')
          }}>
            Login
          </Button>
        </div>
        <div className="relative w-[400px] flex justify-between items-center gap-1 my-3">
          <span className="w-[40%] h-[0.5px] bg-[#B0AAAA]"></span>
          <p className="relative whitespace-nowrap">or sign in with</p>
          <span className="w-[40%] h-[0.5px] bg-[#B0AAAA]"></span>
        </div>
        <div>
          <Googleicon />
        </div>
        <div className=" flex font-moon gap-2">
          <div
            className="text-pink-400 cursor-pointer text-[16px] font-medium"
            onClick={() => {
              router.push('/auth');
            }}
          >
            {" "}
            Create an account
          </div>
        </div>
      </div>
    </div>
  );
};
}
export default SignInPage;
