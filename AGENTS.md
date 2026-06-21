# AGENTS.md — Rajmata Enterprise Website

## Project Overview

Bilingual (Hindi + English) marketing website for **Rajmata Enterprise**, a wholesale supplier of disposable items, cleaning products, and packaging materials in KPHB Colony, Hyderabad. Built with TanStack Start on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Custom CSS in `src/styles.css` + Tailwind CSS 4 |
| Icons | Lucide React |
| Language | TypeScript 5 |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx        # Root shell — Navbar, Footer, WhatsAppButton, LanguageProvider
    index.tsx         # Home page — Hero, Products preview, Why Us, CTA
    products.tsx      # Products gallery with category filter tabs
    about.tsx         # About Us — story, values, mission, clients
    contact.tsx       # Contact form + Google Map embed
    order.tsx         # Online order booking form
  components/
    Navbar.tsx        # Responsive navbar with EN/HI language toggle
    Footer.tsx        # 3-column footer with links + contact info
    WhatsAppButton.tsx  # Fixed floating WhatsApp CTA (bottom-right)
  contexts/
    LanguageContext.tsx  # React context — lang state, setLang, translated `t`
  translations/
    index.ts          # All bilingual text (en + hi). Single source of truth for UI copy.
  styles.css          # All custom CSS (CSS variables, component classes, animations)
  router.tsx          # TanStack router configuration
```

## Architecture: Language System

- `LanguageContext` wraps the entire app in `__root.tsx` via `LanguageProvider`
- State initializes as `'en'` (SSR-safe), hydrates from `localStorage` on client mount
- `useLang()` hook exposes `{ lang, setLang, t }` — `t` is the typed translation object
- **All visible text must come from `t.*`** — never hardcode user-facing strings in components
- To add new UI text: add keys to both `en` and `hi` objects in `translations/index.ts`

## Architecture: WhatsApp Integration

- No backend required — all forms open `https://wa.me/918142853118?text=...` with a pre-built message
- Contact form: opens WhatsApp with name + phone + message
- Order form: builds a structured order message with selected products
- Product cards: link to WhatsApp with the specific product name pre-filled
- WhatsApp number: `8142853118` → URL uses `918142853118` (91 = India country code)

## Architecture: Routing

- TanStack Router file-based routing — each `src/routes/*.tsx` file is a page
- `routeTree.gen.ts` is auto-generated at build time — never edit manually
- `__root.tsx` uses `shellComponent` (SSR shell pattern), not `component`

## Styling Conventions

- CSS custom properties for brand colors defined in `:root` in `styles.css`
- Class naming follows `.block-element` pattern: `.product-card`, `.product-card-name`
- Fonts: `DM Serif Display` (headings, Latin) + `Hind` (body, supports Devanagari for Hindi)
- Brand colors: Royal Blue `#1e3a8a`, Orange `#f97316`, White `#ffffff`
- Tailwind CSS is available but minimal — prefer custom classes for this site

## Non-Obvious Decisions

- Language defaults to `'en'` server-side to prevent SSR/hydration mismatches; localStorage update happens in `useEffect`
- Product icons use Lucide React + colored background divs (no image files = no broken URLs)
- Google Maps embed is a pre-built iframe for KPHB Colony, Hyderabad
- Order form submits by opening a WhatsApp deep link — no server-side form processing

## Business Info

| Field | Value |
|-------|-------|
| Business Name | Rajmata Enterprise |
| WhatsApp | +91 81428 53118 |
| Address | LIG Flats 88/2, Phase 3, KPHB Colony, Hyderabad |
| Hours | Monday–Saturday, 9 AM – 7 PM |
