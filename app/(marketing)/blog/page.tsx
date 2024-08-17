import Image from "next/image";
import { allPosts } from "@/.contentlayer/generated";
import { format } from "date-fns";
import Link from "next/link";

export default function BlogPage() {
  const posts = allPosts;

  return (
    <div className="container max-w-4xl md:pt-[80px]">
      <div>
        <div className="text-center space-y-2 md:space-y-4">
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
            Blog🚀
          </h1>
          <p className="text-muted-foreground">
            ContentLayerとMDXで書いています。
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <article key={post._id} className="relative flex flex-col space-y-2">
            {post.image && (
              <Image
                src={post.image}
                width={804}
                height={452}
                alt={post.title}
                className="rounded-md border bg-muted "
              />
            )}
            <Link href={post.slug} className="absolute inset-0">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold px-3 md:px-5 break-words">
                {post.title}
              </h2>
            </Link>
            {post.description && (
              <p className="text-xs md:text-lg text-muted-foreground">
                {post.description}
              </p>
            )}
            {post.date && (
              <p className="text-sm text-muted-foreground">
                {format(post.date, "yyyy/dd/mm")}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
