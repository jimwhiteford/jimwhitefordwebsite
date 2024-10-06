import { groq } from "next-sanity";
import { client, sanityFetch } from "@/sanity/lib/client";
import BlogList from "../components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 60;

async function getPosts() {
  const posts = await client.fetch(query);
  return posts;
}

async function Homepage() {
  const posts = await getPosts();
  return <BlogList posts={posts} />;
}

export default Homepage;
