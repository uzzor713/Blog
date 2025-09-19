// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* 大号 404 */}
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>

      {/* 提示文字 */}
      <p className="mt-4 text-2xl font-semibold text-gray-700">
        页面不存在
      </p>
      <p className="mt-2 text-gray-500">
        抱歉，你访问的页面不存在或者已经被移除。
      </p>

      {/* 返回按钮 */}
      <div className="mt-6">
        <Link
          to="/"
          className="px-6 py-3 text-blue-600 hover:text-blue-800"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
