import { groq } from "next-sanity";
import { client, sanityFetch } from "@/sanity/lib/client";
import BlogList from "../components/BlogList";

// export const metadata: Metadata = {
//   title: "Blog",
// };

export const revalidate = 60;
const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

async function Homepage() {
  const posts = await sanityFetch({ query: query });
  return <BlogList posts={posts} />;
}

export default Homepage;
