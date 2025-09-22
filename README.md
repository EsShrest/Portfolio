Single‑page React + Vite portfolio deployed via GitHub Pages. Includes responsive sidebar navigation, animated sections, and an EmailJS‑powered contact form.

## Local Instructions

1. Install dependencies:
   `npm install`
2. Create `.env.local` with your EmailJS keys:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
3. Start dev server:
   `npm run dev`
4. Production build:
   `npm run build`
5. Deploy to GitHub Pages branch:
   `npm run deploy`

The `gh-pages` package publishes the contents of `dist/` to the `gh-pages` branch.
