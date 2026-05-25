# ✈️ PPL 培訓機師讀書計畫 App

## 快速部署

### 1. Clone & 安裝
```bash
git clone <your-repo>
cd pilot-study-app
npm install
```

### 2. 建立 Notion Databases
在 Notion 建立 4 個 Database（可用 Table 視圖）：

| Database 名稱 | 必要欄位 |
|---|---|
| **Daily Progress** | date (Date), week_number (Number), math_done (Checkbox), physics_done (Checkbox), review_done (Checkbox), study_minutes (Number), notes (Rich Text), mood (Select: great/ok/tired) |
| **Study Plan** | week (Number), day_of_week (Select), math_topic (Rich Text), physics_topic (Rich Text) |
| **Wrong Questions** | question (Title), date (Date), subject (Select: math/physics), my_answer (Rich Text), correct_answer (Rich Text), explanation (Rich Text), reviewed (Checkbox), week_number (Number) |
| **Config** | exam_name (Title), start_date (Date), exam_date (Date), daily_goal_mins (Number), user_name (Rich Text) |

### 3. 設定環境變數
```bash
cp .env.local.example .env.local
# 填入以下變數：
```

| 變數名稱 | 說明 | 取得方式 |
|---|---|---|
| `NOTION_TOKEN` | Notion Integration Token | notion.so/my-integrations |
| `NOTION_DB_DAILY_PROGRESS` | Daily Progress DB ID | DB 頁面 URL 中的 32 碼 |
| `NOTION_DB_STUDY_PLAN` | Study Plan DB ID | 同上 |
| `NOTION_DB_WRONG_QUESTIONS` | Wrong Questions DB ID | 同上 |
| `NOTION_DB_CONFIG` | Config DB ID | 同上 |
| `ANTHROPIC_API_KEY` | Claude API Key | console.anthropic.com |

### 4. 本地開發
```bash
npm run dev
# 開啟 http://localhost:3000
```

### 5. 部署到 Vercel
```bash
# 安裝 Vercel CLI
npm i -g vercel
vercel

# 在 Vercel Dashboard → Settings → Environment Variables
# 填入上述所有環境變數
```

## 專案結構
```
src/
├── app/
│   ├── page.tsx              # 首頁 (Dashboard)
│   ├── calendar/page.tsx     # 月曆頁
│   ├── daily/page.tsx        # 每日任務頁
│   ├── quiz/page.tsx         # AI 練習題頁
│   ├── timer/page.tsx        # 計時器頁
│   ├── settings/page.tsx     # 設定頁
│   └── api/
│       ├── schedule/         # 每日進度 CRUD
│       ├── quiz/             # AI 出題 + 錯題
│       ├── stats/            # 月份統計
│       └── config/           # 設定讀寫 + Notion 測試
├── components/
│   ├── layout/               # Sidebar, AppShell
│   └── ui/                   # Card, Badge, ProgressBar
├── lib/
│   ├── notion.ts             # Notion API 封裝
│   ├── utils.ts              # 日期/週數工具函式
│   └── study-plan-data.ts    # 20 週課表資料（100 天）
└── types/index.ts            # TypeScript 型別定義
```

## 功能說明
- **Dashboard** — 今日概覽、任務打勾、Notes、心情記錄
- **月曆** — 月視圖、完成狀態色塊、點入查看當日任務
- **每日任務** — 前後日切換、數學/物理/複習三項打勾、進度條
- **AI 練習題** — Claude API 根據當週主題出題、答題批改、加入錯題本
- **計時器** — 正計時、儲存讀書時間到 Notion
- **設定** — 開始日/考試日設定、Notion 連線測試
