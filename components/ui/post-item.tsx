import Link from "next/link";
import { format } from "date-fns";
import { Post } from "@prisma/client";
import PostOperations from "../post-operations";

interface PostItemProps {
  post: Pick<Post, "id" | "title" | "published" | "createdAt">;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${post.id}`}
          className="font-semibold hover:underline"
        >
          {post.title}
        </Link>

        <div>
          <p className="text-sm text-muted-foreground">
            {format(post.createdAt, "yyyy-MM-dd")}
          </p>
        </div>
      </div>

      <PostOperations post={post} />
    </div>
  );
}
