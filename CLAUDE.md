# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Package Management
- `npm install` - Install all dependencies
- `npm install <package>` - Add a new package

## Architecture

### Tech Stack
- **React 18** with Vite for fast development and builds
- **Tailwind CSS** for styling (utility-first approach)
- **Framer Motion** for animations and transitions
- **React Hook Form** for form handling with validation

### Project Structure
```
src/
├── components/      # All React components (one component per file)
├── App.jsx         # Main app component (imports all sections)
├── main.jsx        # React entry point
└── index.css       # Global styles and Tailwind directives
```

### Component Organization
This is a single-page application with 8 main sections:
1. **Header** - Fixed navigation with smooth scrolling, changes background on scroll
2. **Hero** - Full-screen landing section with parallax background
3. **Features** - 3-column grid showcasing restaurant features
4. **Menu** - Alternating image/text layout for menu items
5. **About** - Restaurant information and history
6. **Access** - Google Maps integration and store details
7. **Contact** - Form with validation using React Hook Form
8. **Footer** - Site info and social links

Each component is self-contained in `src/components/` and imported into `App.jsx`.

### Styling Conventions
- Use Tailwind utility classes directly in JSX
- Custom utilities defined in `index.css` under `@layer utilities`
- `.section-padding` - Standard section padding (py-20 px-6 md:px-12 lg:px-24)
- `.container-custom` - Max-width container (max-w-7xl mx-auto)
- Color scheme uses `red-600` as primary brand color
- Responsive breakpoints: sm (640px), md (768px), lg (1024px)

### Animation Patterns
- Use `framer-motion`'s `<motion.div>` for animated elements
- Common patterns:
  - `initial={{ opacity: 0, y: 30 }}` + `whileInView` for scroll animations
  - `viewport={{ once: true }}` to animate only once
  - `useInView` hook for tracking when elements enter viewport
  - Stagger delays using `index * 0.2` for list items

### Form Handling
- Contact form uses `react-hook-form` with validation rules
- Field validation defined inline with `register()` options
- Success message shows for 5 seconds after submission
- Currently logs to console (implement actual backend integration as needed)

### Navigation
- Smooth scroll implemented via `element.scrollIntoView({ behavior: 'smooth' })`
- Each section has an `id` attribute matching nav items
- Mobile menu toggles with hamburger icon

## Key Files

- `vite.config.js` - Vite configuration (port 3000, auto-open browser)
- `tailwind.config.js` - Tailwind customization (colors, fonts)
- `index.html` - HTML entry point with Noto Sans JP font from Google Fonts
- `SITE_ROUGH.md` - Original wireframe/design specifications

## Content Updates

To update content:
1. **Text** - Edit directly in component files (e.g., `src/components/Menu.jsx`)
2. **Images** - Replace URLs in component files or add images to `public/` folder
3. **Colors** - Modify `tailwind.config.js` theme colors
4. **Navigation** - Update `navItems` array in `Header.jsx`
5. **Menu Items** - Edit `menuItems` array in `Menu.jsx`
6. **Store Info** - Update in `Access.jsx` and `Footer.jsx`

## Important Notes

- All images currently use Unsplash placeholder URLs - replace with actual images
- Google Maps embed URL should be updated with actual location coordinates
- Contact form currently only logs data - implement backend email service
- Social media links in footer are placeholder `#` - update with real URLs
- Site is optimized for Japanese content (Noto Sans JP font, lang="ja")
