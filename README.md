# Personal Portfolio

A modern, minimal personal portfolio website built with Next.js 14, React 18, and Tailwind CSS.

## Features

- ✨ Modern, minimal design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive
- ⚡ Fast and optimized with Next.js App Router
- 🎨 Styled with Tailwind CSS

## Technologies

- **Ruby/Ruby on Rails**
- **React**
- **Tailwind CSS**
- **PostgreSQL**

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── providers.tsx       # Theme provider wrapper
├── components/
│   ├── Hero.tsx            # Hero/About section
│   ├── TechnicalCompetencies.tsx  # Skills section
│   ├── Contact.tsx         # Contact section
│   └── ThemeToggle.tsx     # Dark/light mode toggle
└── public/                 # Static assets
```

## Customization

1. Update your personal information in the component files
2. Modify the contact email in `components/Contact.tsx`
3. Add or remove technologies in `components/TechnicalCompetencies.tsx`
4. Customize colors and styling in `tailwind.config.ts` and component files

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License - see LICENSE file for details