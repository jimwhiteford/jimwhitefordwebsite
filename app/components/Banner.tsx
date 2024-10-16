import { groq } from "next-sanity";
import { client, sanityFetch } from "@/sanity/lib/client";

export const revalidate = 60;
const query = groq`
  *[_type=='category'] {
    ...,
  } 
`;

async function Banner() {
  const categorys = await sanityFetch({ query: query });
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl mb-3">The Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to my blog of{" "}
          <span className="underline decoration-4 decoration-[#006678]">
            passions and interests.
          </span>{" "}
        </h2>
      </div>
      <div className="flex mt-5 md:mt-7 text-gray-500 text-lg max-w-sm">
        {categorys.map((category: any) => (
          <div key={category._id}>
            <p className="mr-4">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
