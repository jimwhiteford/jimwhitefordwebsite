import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center justify-center p-8">
        <Link href="/">
          <Image
            className="rounded-full"
            src={logo}
            width={200}
            height={200}
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://www.youtube.com/@offgridjim"
          target="_blank"
          className="px-5 py-3 text-center text-sm md:text-base bg-gray-900 text-white flex items-center rounded-full"
        >
          Check out my YouTube
        </Link>
      </div>
    </header>
  );
}

export default Header;
