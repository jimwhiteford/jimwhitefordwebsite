import { client, sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/app/components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};
// export const revalidate = 0;
// export const dynamic = "auto";
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
  {
    slug
  }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  console.log(slugRoutes);
  return slugRoutes.map((slug) => ({
    slug: slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`*[_type=='post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
  }`;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#006678] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-30 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-[#006678] w-full">
            <div className="flex flex-col  justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  {/* <div>TODO: author bio</div> */}
                </div>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category: any) => (
                  <p
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default Post;
