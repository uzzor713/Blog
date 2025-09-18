export default {
  // 对暂存的 .ts/.tsx 文件，先执行 ESLint 自动修复，再用 Prettier 格式化
  '*.{ts,tsx}': [
    'eslint --fix', 
    'prettier --write'
  ],
  // 对 .css/.md 等文件，仅用 Prettier 格式化
  '*.{css,md}': ['prettier --write']
};