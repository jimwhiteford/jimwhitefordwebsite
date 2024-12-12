import { groq } from "next-sanity";
import { client, sanityFetch } from "@/sanity/lib/client";
import HeroBlogList from "../components/HeroBlogList";
import Hero from "../components/Hero";
import AdBanner from "../components/AdBanner";

// export const metadata: Metadata = {
//   title: "Blog",
// };

export const revalidate = 60;
const query = groq`
  *[_type=='post'][0..2] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

async function Homepage() {
  const posts = await sanityFetch({ query: query });
  return (
    <div>
      <Hero />
      {/* <AdBanner
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="5081905516"
      /> */}
      <HeroBlogList posts={posts} />
    </div>
  );
}

export default Homepage;
