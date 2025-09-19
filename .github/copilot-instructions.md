# SnapFolio Portfolio - AI Development Instructions

## Project Overview
This is a single-page React portfolio website built with Vite, TypeScript, and Tailwind CSS. It features a modern dark theme with an animated sidebar navigation, smooth scrolling between sections, and EmailJS-powered contact form functionality.

## Architecture & Key Patterns

### Component Structure
- **App.tsx**: Main layout with `Sidebar` + scrollable `main` content containing all sections
- **Sidebar.tsx**: Responsive navigation with hover-to-expand desktop mode and toggle mobile menu
- **Section Components**: Each portfolio section (`Hero`, `About`, `Resume`, `Portfolio`, `Contact`) is a self-contained component
- **Icons.tsx**: Centralized SVG icon components with consistent `IconProps` interface

### Styling Conventions
- Uses **Tailwind CSS via CDN** (not installed locally) - reference in `index.html`
- Dark theme with zinc/gray color palette (`bg-zinc-900`, `text-gray-300`)
- Accent color: `amber-400` for highlights and decorative elements
- Responsive breakpoints: `md:` (768px+) for desktop-specific layouts
- Animation patterns: `hover:-translate-y-2 transition-transform duration-300` for cards

### Technical Setup
- **React 19.1.1**: Uses AI Studio CDN imports via import maps (not npm-installed)
- **Vite config**: Environment variable handling for multiple services:
  - `GEMINI_API_KEY` (exposed as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY`)
  - EmailJS vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
- **Path alias**: `@/*` maps to project root (configured in both `tsconfig.json` and `vite.config.ts`)
- **Font**: Poppins from Google Fonts loaded in HTML head

## Development Workflow

### Environment Setup
```bash
npm install
# Create .env.local with required API keys:
# GEMINI_API_KEY=your_gemini_api_key
# VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id  
# VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
# VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
npm run dev  # Starts Vite dev server
```

### Build Commands
- `npm run dev`: Development server
- `npm run build`: Production build via Vite
- `npm run preview`: Preview production build

### Key Dependencies
- `@emailjs/browser`: Contact form email functionality
- `react@^19.1.1`: Via AI Studio CDN (not npm)
- No local Tailwind installation (uses CDN)

## Component Patterns to Follow

### Icon Components
```tsx
export const IconName: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {/* SVG paths */}
  </svg>
);
```

### Section Layout Pattern
```tsx
const SectionName: React.FC = () => (
  <section id="section-name" className="section-specific-classes">
    {/* Section content */}
  </section>
);
```

### TypeScript/JSX Pattern
Replace `JSX.Element` with `React.ReactElement` for component props to avoid "Cannot find namespace 'JSX'" errors:
```tsx
// ❌ Avoid: JSX.Element
// ✅ Use: React.ReactElement  
const Component: React.FC<{ icon: React.ReactElement }> = ({ icon }) => (...)
```

### Responsive Navigation
- Desktop: Sidebar expands on hover (`group-hover:` classes)
- Mobile: Toggle overlay menu with hamburger icon
- Smooth scrolling via anchor links (`href="#section-id"`)

## Key Implementation Details

### Sidebar Behavior
- Desktop: Collapsed by default (80px width), expands to ~256px on hover
- Shows initials "ES" when collapsed, full name "Eshan Shrestha" when expanded
- Mobile: Full-width overlay menu with backdrop

### Animation Patterns
- Typewriter effect in Hero component using `useState` and `useEffect`
- CSS transitions for hover effects: `transition-all duration-300`
- Card hover effects: `hover:-translate-y-2` for lift animation

### Color System
- Background: `bg-zinc-900` (main), `bg-zinc-800` (cards)
- Text: `text-white` (headings), `text-zinc-400` (body), `text-gray-300` (default)
- Accents: `text-amber-400`, `bg-amber-400` for highlights and decorative lines

When modifying components, maintain consistency with these established patterns and the dark theme aesthetic.