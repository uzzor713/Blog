export interface Post {
  id: number;
  title: string;
  excerpt: string;   // 首页用的摘要
  content: string;   // 详情页用的正文 (Markdown)
  date: string;
  tags?: string[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: "我的第一篇博客",
    excerpt: "这是我写的第一篇博客，记录搭建这个网站的过程……",
    content: `#
这里是正文，可以写 **Markdown**，内容很长很长……
- 列表
- 列表
- 列表
`,
    date: "2025-09-18",
  },
  {
    id: 2,
    title: "React 学习笔记",
    excerpt: "React Hooks 使用心得，总结了 useState、useEffect 等……",
    content: `#

这里是完整的文章内容，比如代码片段：

\`\`\`tsx
function Hello() {
  return <div>Hello World</div>;
}
\`\`\`
`,
    date: "2025-09-19",
  }
];
