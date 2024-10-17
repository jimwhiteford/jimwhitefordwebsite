import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";
import { MetadataRoute } from "next";

const postSlugsQuery = groq`
*[_type == "post"] {
  "slug": slug.current
}
`;

async function getBlogPosts() {
  type Props = {
    posts: string[];
    slug: string;
  };

  const posts = await client.fetch(postSlugsQuery);
  return posts.map((post: Props) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${post.slug}`,
    // lastModified: new Date(post.updatedAt)
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();
  return [...blogPosts];
}
