import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image 
            src={"/assets/logo.png"}
            alt="لوگو"
            width={198}
            height={28}
        /> 
      </Link>
    </div>
  );
};

export default Logo;
