# Setup

## File Structure

```text
tally/
├── content/
│   ├── config.toml
│   └── tally.toml
├── public/
│   └── (Logos and other static assets)
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   └── template.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   └── Footer.tsx
│   │   ├── tally/
│   │   │   ├── ScheduleForm.tsx
│   │   │   ├── ScheduleModal.tsx
│   │   │   ├── SchedulePreview.tsx
│   │   │   ├── SchedulePreviewFromSheet.tsx
│   │   │   ├── SettingsModal.tsx
│   │   │   └── Tally.tsx
│   │   └── ui/
│   │       ├── ThemeProvider.tsx
│   │       ├── ThemeScript.tsx
│   │       └── ThemeToggle.tsx
│   ├── lib/
│   │   ├── stores/
│   │   │   └── themeStore.ts
│   │   ├── tally/
│   │   │   ├── exportPdf.ts
│   │   │   ├── exportXlsx.ts
│   │   │   ├── helper.ts
│   │   │   ├── importXlsx.ts
│   │   │   └── scheduler.ts
│   │   ├── config.ts
│   │   ├── content.ts
│   │   └── utils.ts
│   └── types/
│       ├── home.ts
│       └── page.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Modified Files (from rsf-website)

- `src/app/layout.tsx` (Removed navigation, added ThemeToggle fixed wrapper)
- `src/app/page.tsx` (Stripped unused imports, hardcoded to Tally)

## Copied Files (from rsf-website)

- `src/components/tally/*`
- `src/lib/tally/*`
- `src/components/layout/Footer.tsx`
- `src/components/ui/ThemeProvider.tsx`
- `src/components/ui/ThemeScript.tsx`
- `src/components/ui/ThemeToggle.tsx`
- `src/lib/stores/themeStore.ts`
- `src/lib/config.ts`
- `src/lib/content.ts`
- `src/lib/utils.ts`
- `src/types/*`
- `content/config.toml`
- `content/tally.toml`
- `src/app/globals.css`
- `src/app/not-found.tsx`
- `src/app/template.tsx`

## Setup Commands

1. `npx create-next-app@latest tally --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes`
2. `cd tally`
3. `npm install framer-motion zustand @headlessui/react @heroicons/react lucide-react smol-toml clsx next-themes jspdf xlsx`
4. `npm run dev`
