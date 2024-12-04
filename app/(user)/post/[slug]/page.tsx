import { client, sanityFetch } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";
import { Post } from "@/app/components/Post";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: QueryParams;
}): Promise<Metadata> {
  const query = groq`*[_type=='post' && slug.current == $slug][0]{
    ...,
  }`;
  const post = await sanityFetch({
    query: query,
    params,
  });
  return {
    title: post.title,
    description: post.description,
  };
}

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
        "headings": body[style in ["h2", "h3", "h4", "h5"]],
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
