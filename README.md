# Aozora - 輕量 Next.js 專案

一個現代化的輕量級 Next.js 應用程序，使用最新的技術棧構建。

## 🚀 技術棧

- **Next.js 14** - React 框架，支援 App Router
- **TypeScript** - 型別安全的 JavaScript
- **Tailwind CSS** - 實用性優先的 CSS 框架
- **ESLint + Prettier** - 代碼品質和格式化工具
- **React 19** - 最新版本的 React

## 📦 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看結果。

### 構建生產版本

```bash
npm run build
npm start
```

## 🛠️ 可用腳本

- `npm run dev` - 啟動開發服務器
- `npm run build` - 構建生產版本
- `npm run start` - 啟動生產服務器
- `npm run lint` - 運行 ESLint
- `npm run lint:fix` - 自動修復 ESLint 錯誤
- `npm run format` - 格式化代碼
- `npm run format:check` - 檢查代碼格式

## 📁 專案結構

```
src/
  app/                 # App Router 頁面
    layout.tsx         # 根佈局
    page.tsx          # 首頁
    globals.css       # 全局樣式
  components/         # 可重用元件
    Button.tsx        # 按鈕元件
  lib/               # 工具函數
    utils.ts          # 通用工具
public/              # 靜態文件
```

## 🎨 功能特色

- ⚡ 基於 Next.js 14 的快速性能
- 🎨 使用 Tailwind CSS 的現代設計
- 🔧 完整的 TypeScript 支援
- 📱 響應式設計
- 🌙 深色模式支援
- 🛠️ 預配置的開發工具

## 🚀 部署

這個應用可以輕鬆部署到 [Vercel](https://vercel.com/)：

1. 將代碼推送到 GitHub
2. 在 Vercel 中導入專案
3. 自動部署完成

## 📚 學習資源

- [Next.js 文檔](https://nextjs.org/docs) - 學習 Next.js 功能和 API
- [Tailwind CSS](https://tailwindcss.com/docs) - 學習 Tailwind CSS
- [TypeScript](https://www.typescriptlang.org/docs/) - 學習 TypeScript
