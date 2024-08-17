import Image from "next/image";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Mdx from "@/components/mdx-components";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

async function getPostFromSlug(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = await getPostFromSlug(params.slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "article",
      locale: "ja",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.jpg`],
      creator: "@shincode",
    },
  };
}

// 動的ルーティングは引数にparamsを用意してslugにstringがたを定義する
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl md:pt-[80px]">
      <h1 className="font-extrabold text-xl md:text-3xl lg:text-4xl leading-tight break-words">
        {post.title}
      </h1>
      {post.date && <time>Published on {format(post.date, "yyyy/MM/dd")}</time>}
      {post.image && (
        <Image
          src={post.image}
          width={830}
          height={300}
          alt={post.title}
          className="my-8 border rounded-md bg-muted object-cover"
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="py-6 lg:py-10 text-center">
        <Link
          href={"/blog"}
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          全ての記事を見る
        </Link>
      </div>
    </article>
  );
}
