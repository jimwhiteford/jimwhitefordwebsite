import { groq } from "next-sanity"
import {client} from "../../sanity/lib/client"
import BlogList from "../components/BlogList"

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

async function Homepage() {
  const posts = await client.fetch(query)
  return (
    <BlogList posts={posts} />
  )
}

export default Homepage