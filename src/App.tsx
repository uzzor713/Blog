import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4"></h1>
      <p>这里是文章列表（以后可以从数据渲染出来）</p>
      <Link to="/post/1" className="text-blue-600 underline">
        查看文章 1
      </Link>
    </div>
  );
}

function PostDetail() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">文章详情</h2>
      <p>这里显示文章的具体内容</p>
    </div>
  );
}

function About() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">关于我</h2>
      <p>这是关于页，可以写作者介绍</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* 网站标题 */}
          <span className="text-2xl font-bold text-gray-900">晋卓然的博客</span>
          {/* 导航 */}
          <nav className="mt-2 sm:mt-0 flex gap-2">
            <a href="/" className="text-gray-700 hover:text-blue-500 px-3 py-1">首页</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500 px-3 py-1">关于</a>
          </nav>
        </div>
      </header>

      <div className="blog-container">
        {/* 路由切换 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <footer className="bg-white border-b border-gray-200 mt-auto shadow">
        <div className="text-center text-gray-500 py-4">
          &copy; 2024 晋卓然的博客. All rights reserved.
        </div>
      </footer>
    </div>
    
  );
}

export default App;
