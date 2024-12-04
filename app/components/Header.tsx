import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../../public/logo2.png";
import YT from "../../public/YT.png";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center justify-center p-8">
        <Link href="/">
          <Image
            className="rounded-full"
            src={logo2}
            width={200}
            height={200}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex">
        <Link
          href="/"
          className="px-3 py-3 text-lg hover:text-[#a49104] text-black"
        >
          Home
        </Link>
        <Link
          href="/"
          className="px-3 py-3 text-lg hover:text-[#a49104] text-black"
        >
          About
        </Link>
        <Link href="https://www.youtube.com/@offgridjim" target="_blank">
          <Image
            className="ml-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src={YT}
            width={75}
            alt="ytlogo"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
