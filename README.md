# Aozora - 輕量 Next.js 專案

一個現代化的輕量級 Next.js 應用程序，使用最新的技術棧構建。

## 🚀 技術棧

- **Next.js 14** - React 框架，支援 App Router
- **TypeScript** - 型別安全的 JavaScript
- **Tailwind CSS** - 實用性優先的 CSS 框架
- **Shadcn/ui** - 高質量的可重用元件庫
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
    demo/             # Shadcn/ui 元件演示頁面
      page.tsx
    layout.tsx         # 根佈局
    page.tsx          # 首頁
    globals.css       # 全局樣式
  components/         # 可重用元件
    ui/               # Shadcn/ui 元件
      button.tsx      # 按鈕元件
      card.tsx        # 卡片元件
      badge.tsx       # 徽章元件
      avatar.tsx      # 頭像元件
      input.tsx       # 輸入框元件
  lib/               # 工具函數
    utils.ts          # 通用工具 (含 cn 函數)
public/              # 靜態文件
components.json      # Shadcn/ui 配置文件
```

## 🎨 功能特色

- ⚡ 基於 Next.js 14 的快速性能
- 🎨 使用 Tailwind CSS 和 Shadcn/ui 的現代設計
- 🔧 完整的 TypeScript 支援
- 📱 響應式設計
- 🌙 深色模式支援
- 🛠️ 預配置的開發工具
- 🧩 豐富的可重用元件庫

## 📦 Shadcn/ui 元件

已安裝的元件：
- Button - 多種樣式和尺寸的按鈕
- Card - 內容容器卡片
- Badge - 標籤和徽章
- Avatar - 用戶頭像
- Input - 表單輸入框

添加更多元件：
```bash
npx shadcn@latest add [component-name]
```

查看所有可用元件：[Shadcn/ui Components](https://ui.shadcn.com/docs/components)

## 🚀 部署

這個應用可以輕鬆部署到 [Vercel](https://vercel.com/)：

1. 將代碼推送到 GitHub
2. 在 Vercel 中導入專案
3. 自動部署完成

## 📚 學習資源

- [Next.js 文檔](https://nextjs.org/docs) - 學習 Next.js 功能和 API
- [Tailwind CSS](https://tailwindcss.com/docs) - 學習 Tailwind CSS
- [TypeScript](https://www.typescriptlang.org/docs/) - 學習 TypeScript
