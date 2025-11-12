# Aozora 信用卡與電子支付比較平台

一個智能的信用卡與電子支付比較平台，幫助使用者根據消費場景找到最適合的回饋方案。

## 功能特色

### 🎯 智能場景選擇
- **兩層式選擇流程**：先選擇大分類，再選擇具體場景
- **五大消費分類**：日本旅遊、韓國旅遊、訂閱服務、零售商店、網購平台
- **直觀的卡片介面**：每個場景都有對應的圖示和描述

### 💳 個人化推薦
- 根據選擇的消費場景智能推薦最適合的信用卡和電子支付
- 顯示實際回饋率和特色功能
- 提供用戶評分和詳細比較

### 📱 響應式設計
- 使用 Tailwind CSS 和 Shadcn/ui 組件
- 完全響應式設計，支援桌面和行動裝置
- 美觀的漸層背景和現代化 UI

## 頁面結構

### 首頁 (/)
- 平台介紹和主要功能說明
- 快速進入情境選擇頁面的入口

### 情境選擇頁 (/scenarios)
- **第一層**：五大消費分類選擇
- **第二層**：具體消費場景選擇
- 麵包屑導航和返回按鈕

### 結果頁 (/results)
- 根據選擇的場景顯示推薦的信用卡和電子支付方案
- 顯示回饋率、特色功能、用戶評分
- 支援多種排序方式

## 技術規格

- **框架**: Next.js 16.0.1 with App Router
- **語言**: TypeScript
- **樣式**: Tailwind CSS 4.0
- **UI 組件**: Shadcn/ui
- **圖標**: Lucide React
- **部署**: 支援 Vercel、Netlify 等平台

## 快速開始

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 啟動生產伺服器
npm start
```

## 消費場景

### 🇯🇵 日本旅遊
- ANA 全日空、JAL 日本航空
- JR Pass / Suica（交通票券）
- 日本三越、日本高島屋（百貨）
- Bic Camera（電器）

### 🇰🇷 韓國旅遊
- 韓亞航空
- 樂天免稅店、新世界百貨、現代百貨
- Olive Young（美妝）
- T-money（首爾地鐵卡）

### 📱 訂閱服務
- Netflix、YouTube Premium、Disney+
- Spotify（音樂串流）
- iCloud / Apple One
- ChatGPT Plus

### 🏪 零售商店
- 全聯、家樂福（超市）
- 全家、7-Eleven（便利商店）
- Costco（倉儲賣場）
- 美廉社

### 💻 網購平台
- momo 購物網、PChome 24h
- 蝦皮 Shopee
- 淘寶、Amazon JP
- Pinkoi（設計購物）

## 開發說明

### 專案結構
```
src/
├── app/
│   ├── page.tsx          # 首頁
│   ├── scenarios/
│   │   └── page.tsx      # 情境選擇頁
│   └── results/
│       └── page.tsx      # 結果顯示頁
├── components/
│   └── ui/               # Shadcn/ui 組件
└── lib/
    └── utils.ts          # 工具函數
```

### 參數傳遞
結果頁面接收以下 URL 參數：
- `category`: 消費分類
- `merchant`: 商家代碼
- `country`: 國家代碼
- `channel`: 通路類型
- `epay`: 電子支付類型

## 注意事項

- 所有回饋率和推薦結果僅供參考
- 實際優惠條件以各銀行公告為準
- 建議使用前確認個人消費習慣和需求

## 授權

MIT License
