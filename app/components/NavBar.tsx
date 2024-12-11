import Link from "next/link";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: "Animal Husbandry",
    link: "#",
    children: [
      {
        label: "Beekeeping",
        link: "/category/beekeeping",
      },
      // {
      //   label: "Chickens",
      //   link: "/category/chickens",
      // },
    ],
  },
  {
    label: "Sustainable Living",
    link: "#",
    children: [
      {
        label: "Off-Grid",
        link: "/category/off-grid",
      },
      // {
      //   label: "DIY Projects",
      //   link: "#",
      // },
    ],
  },
  {
    label: "Horticulture",
    link: "#",
    children: [
      // {
      //   label: "Agroforestry",
      //   link: "#",
      // },
      {
        label: "Gardening",
        link: "/category/gardening",
      },
    ],
  },
];

function NavBar() {
  return (
    <div className="grow mb-16 font-semibold uppercase">
      <div className="flex items-center justify-center text-md tracking-wide space-x-5">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.link ?? "#"}
            className="relative group px-2 py-3 transition-all"
          >
            <p className="flex cursor-pointer items-center gap-1 text-black hover:underline">
              <span>{item.label}</span>
              {/* {item.children && (
                <ChevronDownIcon className="size-4 rotate-180 transition-all group-hover:rotate-0" />
              )} */}
            </p>
            {item.children && (
              <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                {item.children.map((ch, i) => (
                  <Link
                    key={i}
                    href={ch.link ?? "#"}
                    className="flex cursor-pointer items-center text-md py-1 pl-6 pr-6 text-black hover:underline"
                  >
                    {ch.label}
                  </Link>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
      <hr className="border-[#61690b] mt-4" />
    </div>
  );
}

export default NavBar;
