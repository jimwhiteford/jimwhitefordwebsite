import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Banner from "../components/Banner";

type Props = {
  posts: Post[];
  category: any;
};

function BlogList({ posts, category }: Props) {
  // console.log(category);
  return (
    <div>
      <Banner category={category} />
      <div className="grid grid-cols-1 md:grid-cols-2 m-10 gap-10 gap-y-16 pb-10">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div key={post._id} className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-96 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  priority
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="text-2xl font-bold">{post.title}</p>
                    <div className="flex items-center justify-between">
                      <p className="flex">
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <div className="flex">
                        {post.categories.map((category) => (
                          <div
                            key={category._id}
                            className="bg-[#a49104] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                          >
                            <p>{category.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* <p className="line-clamp-2 text-white text-sm mt-2 italic">
                      {post.description}
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                {/* <p className="underline text-lg font-bold">{post.title}</p> */}
                <p className="line-clamp-2 text-gray-500">{post.description}</p>
              </div>
              <p className="mt-5 font-bold flex items-center group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
