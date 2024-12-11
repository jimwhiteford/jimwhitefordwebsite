import Image from "next/image";
import React from "react";
import heroImage from "../../public/garden.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="grid px-10 md:grid-cols-2 items-center mb-20">
      <div className="ml-32 md:order-1 hidden md:block">
        <Image src={heroImage} alt="homestead man" width={400} />
      </div>
      <div className="">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
          Welcome
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Here you will find everything Homesteading. From Off-Grid Guides to
          Beekeeping Tutorials.
          <wbr /> I hope i can share my knowlege with you, and that you might
          learn somthing along the way.
        </p>
      </div>
    </div>
  );
}

export default Hero;
