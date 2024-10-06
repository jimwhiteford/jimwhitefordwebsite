import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import BlogList from "../components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;
// this is an implemtation to resolve next caching issue with sanity.
export const revalidate = 60;

async function Homepage() {
  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
// export const dynamic = "force-dynamic";
export default Homepage;
