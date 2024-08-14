import Link from "next/link";
import { getSortedPostsData } from "./get-post";

type Post = {
  title: string;
  id: string;
  date: string;
  content: string;
  tags: string[];
};

interface PostProps {
  post: Post;
}

export function Post({ post }: PostProps) {
  const { title, id, date, content, tags } = post;

  console.log(title, id, date, tags);

  return (
    <Link
      href={`/${id}`}
      className="m-4 flex max-w-sm items-center space-x-4 rounded-xl bg-sky-800 p-6 text-white"
    >
      <img className="h-12 w-12" />
      <div>
        <div className="text-xl">{title}</div>
        <div>{}</div>
        <div>{content}</div>
        <div className="flex space-x-4">
          {tags.map((tag) => {
            return (
              <div
                key={tag}
                className="bg-slate-200 px-3 px-1 text-black rounded-full"
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default function PostBox() {
  const posts = getSortedPostsData();
  console.log(posts);
  return (
    <section className="flex flex-col items-center">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </section>
  );
}
