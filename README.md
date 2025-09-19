<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SnapFolio Portfolio

Single‑page React + Vite portfolio deployed via GitHub Pages. Includes responsive sidebar navigation, animated sections, and an EmailJS‑powered contact form.

## Run Locally

**Prerequisites:**  Node.js


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
