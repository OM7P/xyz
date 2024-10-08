import { Button } from "../../components/ui/button";
import Image from "next/image";
import React from "react";

function Googleicon() {
  return (
    <div className="flex ">
      <div className="">
        <Button className="bg-slate-50 hover:bg-slate-300 text-xl text-black w-[400px] h-[50px]">
          <Image
            src={"/images/google-symbol.png"}
            alt="Googgl"
            height={20}
            width={25}
            className="m-2"
          />
          Continue with Google
        </Button>
      </div>
    </div>
  );
}

export default Googleicon;
