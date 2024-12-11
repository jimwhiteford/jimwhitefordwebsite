import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../../public/logogreen.png";
import YT from "../../public/youtube_3938026.png";
import insta from "../../public/instagram_2111463.png";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold py-5 px-10">
      <div className="flex">
        <Link href="/">
          <Image src={logo2} width={300} alt="logo" />
        </Link>
      </div>
      <div className="flex font-medium space-x-5">
        <Link href="/" className="text-lg hover:underline text-black">
          Home
        </Link>
        <Link href="/" className="text-lg hover:underline text-black">
          About
        </Link>

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
    </header>
  );
}

export default Header;
