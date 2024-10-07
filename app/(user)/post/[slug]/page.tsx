import { client, sanityFetch } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";
import { Post } from "@/app/components/Post";

export const revalidate = 5;

export async function generateStaticParams() {
  const query = groq`*[_type == 'post']{
            slug
          }`;
  const posts = await client.fetch(query, {}, { perspective: "published" });
  const list = posts.map((post: any) => ({
    slug: post?.slug?.current,
  }));
  return list;
}

export default async function Page({ params }: { params: QueryParams }) {
  const query = groq`*[_type=='post' && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->
      }`;
  const post = await sanityFetch({
    query: query,
    params,
  });
  if (!post) {
    return notFound();
  }
  return <Post post={post} />;
}
