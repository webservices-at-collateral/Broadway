# Broadway Export LLC v3 — Landing Page

Projeto Next.js (App Router) + Tailwind CSS com a hero section "Broadway Export LLC" v3
(layout alinhado à esquerda, com foto em recorte de seta à direita),
implementada a partir do Figma (node 74:95).

⚠️ A imagem em `public/images/hero-broadway.png` está temporária (export
composto do Figma, com gradiente + linhas já embutidos). Assim que o asset
isolado (fundo transparente) for enviado, substitua esse arquivo e ajuste
o CSS do container da imagem se necessário (hoje usa `object-fit: cover`
"full-bleed"; para um asset isolado o padrão das outras v3 é
`object-fit: contain` + `right/top`, ocupando 100% da altura).

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
  layout.js             # fonte Produkt local via next/font
  page.js               # renderiza a hero section
  globals.css           # Tailwind base
components/
  BroadwayHeroV3.jsx    # a section em si (lockup SVG + subtítulo + parágrafo)
public/
  fonts/produkt-regular.woff2
  images/hero-broadway.png   # imagem de fundo (temporária, ver aviso acima)
```
