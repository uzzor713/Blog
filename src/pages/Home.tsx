import { Link } from "react-router-dom";
import { posts } from "../data/post.ts";

function Home() {
  return (
    <div>
      <div className="text-center py-12 border-b border-gray-200 shadow-sm">
        <p className="text-3xl font-bold text-gray-600 mb-8">欢迎来到我的博客</p>
        <p className="text-2xl font-bold text-gray-500">这里是我用来记录学习和思考过程的地方</p>
      </div>
      <div className="mt-8 mx-auto max-w-3xl px-4">
        <p className="text-2xl font-bold mb-6">文章列表</p>
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.id} className="border-b border-gray-300 pb-4">
              <p className="text-xl font-semibold">
                <Link to={`/post/${post.id}`} className="text-gray-600 hover:text-blue-500">
                  {post.title}
                </Link>
              </p>
              <p className="text-gray-600">{post.excerpt}</p>
              <span className="text-sm text-gray-400">{post.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
