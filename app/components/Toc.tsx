import React from "react";
import { slugify } from "../utils/helpers";

const Toc = ({ headings }: any) => (
  <div className="max-w-2xl mx-auto mt-8 border rounded-sm dark:border-[#006678] bg-slate-100">
    <h2 className="text-xl text-center font-bold p-2 mb-5 border-b dark:border-black bg:amber-50 dark:bg-slate-900/20">
      Table of Contents
    </h2>
    <nav>
      <ul className="ml-10">
        {headings?.map((heading: any) => (
          <li key={heading?._key} className="mb-2">
            {heading.style == "h2" ? (
              <a
                className={
                  "hover:underline hover:text-[#61690b] text-lg font-bold "
                }
                href={`#${slugify(heading.children[0].text)}`}
              >
                {heading.children[0].text}
              </a>
            ) : heading.style == "h3" ? (
              <a
                className={
                  "hover:underline hover:text-[#61690b] text-md font-semibold ml-6"
                }
                href={`#${slugify(heading.children[0].text)}`}
              >
                {heading.children[0].text}
              </a>
            ) : (
              <a
                className={"hover:underline hover:text-[#61690b] text-sm ml-12"}
                href={`#${slugify(heading.children[0].text)}`}
              >
                {heading.children[0].text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Toc;
