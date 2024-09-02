import urlFor from "@/sanity/lib/urlFor"
import Image from "next/image"

type Props = {
    posts: Post []
}

function BlogList ({ posts }: Props) {
    console.log(posts.length)
    return(
        <div>
            <hr className="border-[#006678]" />
            <div>
                {posts.map(post => (
                    <div key={post._id} className="flex flex-col group cursor-pointer">
                        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                            <Image 
                                className="object-cover object-left lg:object-center" 
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name}
                                fill
                            />
                            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                                <div>
                                    <p className="font-bold">{post.title}</p>
                                    <p>
                                        {new Date(post._createdAt).toLocaleDateString("en-US",{
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })}
                                    </p>
                                </div>
                                <div>
                                    {post.categories.map(category => (
                                        <div>
                                            <p>{category.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogList