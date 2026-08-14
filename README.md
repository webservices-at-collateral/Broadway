# Broadway Export LLC — Landing Page

Projeto Next.js (App Router) + Tailwind CSS com a hero section "Broadway Export LLC",
implementada a partir do Figma (node 64:87).

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Deploy na Vercel

### Opção 1 — Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Opção 2 — Painel da Vercel
1. Suba esta pasta para um repositório no GitHub.
2. Acesse https://vercel.com/new
3. Selecione o repositório.
4. Framework Preset: **Next.js** (detectado automaticamente).
5. Clique em **Deploy**.

## Estrutura

```
app/
  layout.js         # fontes (Produkt local + Inter via next/font)
  page.js           # renderiza a hero section
  globals.css       # Tailwind base
components/
  BroadwayHero.jsx  # a section em si (logo SVG + textos + badge)
public/fonts/
  produkt-regular.woff2
```
