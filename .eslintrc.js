module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // 整合Prettier
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': 'error', // Prettier格式化错误视为ESLint错误
    'react/prop-types': 'off', // TypeScript已提供类型检查，关闭prop-types
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 简化导出类型
  },
}
