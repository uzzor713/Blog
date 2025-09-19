// src/PostDetail.tsx
import { useParams } from "react-router-dom";
import { posts } from "../data/post";
import ReactMarkdown from "react-markdown";

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <p className="text-center text-3xl py-10">文章不存在</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-6">{post.date}</p>
      <div className="prose prose-lg mx-auto">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default PostDetail;
