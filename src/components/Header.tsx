import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* 网站标题 */}
        <span className="text-2xl font-bold text-gray-900">晋卓然的博客</span>
        {/* 导航 */}
        <nav className="mt-2 sm:mt-0 flex gap-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            首页
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
