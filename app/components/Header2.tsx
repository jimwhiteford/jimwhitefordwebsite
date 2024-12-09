import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../../public/logo2.png";
import YT from "../../public/youtube_3938026.png";
import insta from "../../public/instagram_2111463.png";

function Header() {
  return (
    <header className="flex items-center justify-between font-bold px-10 py-5">
      <div className="flex space-x-5">
        <Link
          href="https://www.instagram.com/jimwhitefordhomesteading"
          target="_blank"
        >
          <Image
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src={insta}
            width={30}
            alt="insta"
          />
        </Link>
        <Link href="https://www.youtube.com/@offgridjim" target="_blank">
          <Image
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src={YT}
            width={30}
            alt="yt"
          />
        </Link>
      </div>
      <div className="">
        <Link href="/">
          <Image className="rounded-full" src={logo2} width={130} alt="logo" />
        </Link>
      </div>
      <div className="flex text-black text-lg font-medium space-x-4">
        <Link href="/" className="hover:text-[#a49104]">
          Home
        </Link>
        <Link href="/" className="hover:text-[#a49104]">
          About
        </Link>
      </div>
    </header>
  );
}

export default Header;
