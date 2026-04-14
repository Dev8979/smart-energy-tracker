# AI Insights Dashboard

A modern SaaS-style AI insights dashboard built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm, pnpm, or yarn

### Installation & Running Locally

1. Open this folder (`src/frontend/`) in VS Code
2. Open the terminal (`` Ctrl+` `` or **View > Terminal**)
3. Install dependencies:
   ```bash
   pnpm install
   # or: npm install
   ```
4. Start the development server:
   ```bash
   pnpm dev
   # or: npm run dev
   ```
5. Open your browser to **http://localhost:5173**

### Build for Production
```bash
pnpm build
# or: npm run build
```

### Preview Production Build
```bash
pnpm preview
# or: npm run preview
```

### Type Check
```bash
pnpm typecheck
# or: npm run typecheck
```

## Project Structure

```
src/
├── components/         # Shared UI components (Layout, insight cards, etc.)
│   └── ui/             # shadcn/ui base components
├── data/               # Mock data for charts and insights
├── hooks/              # Custom React hooks
├── lib/                # Utility helpers (cn, etc.)
├── pages/              # Page-level components
├── types/              # TypeScript interfaces and types
├── App.tsx             # Root application component
├── main.tsx            # React entry point
└── index.css           # Global styles and design tokens
```

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — fast dev server and bundler
- **Tailwind CSS** — utility-first styling with OKLCH design tokens
- **Recharts** — responsive chart components
- **Radix UI** — accessible headless UI primitives
- **TanStack Query** — async state management
- **Lucide React** — icon library
- **motion** — animation library
