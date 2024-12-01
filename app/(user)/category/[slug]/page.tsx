import { groq } from "next-sanity";
import { client, sanityFetch } from "@/sanity/lib/client";
import BlogList from "../../../components/BlogList";
import { QueryParams } from "next-sanity";
import { Metadata } from "next";

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type == 'category']{
              
              slug
            }`;
  const categories = await client.fetch(
    query,
    {},
    { perspective: "published" }
  );
  const list = categories.map((category: any) => ({
    slug: category?.slug?.current,
  }));
  return list;
}

export default async function Category({ params }: { params: QueryParams }) {
  const query = groq`*[_type == "post" && "${params.slug}" in categories[]->slug.current]{
        ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
    `;
  const posts = await sanityFetch({ query: query, params });

  return <BlogList posts={posts} />;
}
