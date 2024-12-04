import Image from "next/image";
import Link from "next/link";
import urlFor from "@/sanity/lib/urlFor";
import { slugify } from "../utils/helpers";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 mx-auto mt-6 mb-6">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  // block: {
  //   h1: ({ children }: any) => (
  //     <h1 id={children} className="text-5xl py-10 font-bold">
  //       {children}
  //     </h1>
  //   ),
  //   h2: ({ children }: any) => (
  //     <h2 id={children} className="text-4xl py-10 font-bold">
  //       {children}
  //     </h2>
  //   ),
  //   h3: ({ children }: any) => (
  //     <h3 id={children} className="text-3xl py-10 font-bold">
  //       {children}
  //     </h3>
  //   ),
  //   h4: ({ children }: any) => (
  //     <h4 id={children} className="text-2xl py-10 font-bold">
  //       {children}
  //     </h4>
  //   ),
  block: {
    h1: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-5xl font-bold py-10"
      >
        {value.children[0].text}
      </h2>
    ),
    h2: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold py-10"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold py-10"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold py-10"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }: any) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold py-10"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold py-10"
      >
        {value.children[0].text}
      </h6>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#006678] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#006678] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
