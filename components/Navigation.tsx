'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate random colors and flex weights for books
  const generateBooks = (count: number) => {
    const books = [];
    for (let i = 0; i < count; i++) {
      const hue = Math.floor(Math.random() * 360);
      const saturation = 55;
      const lightness = 35 + Math.floor(Math.random() * 30); // 35-65%
      const flexGrow = 1.5 + Math.random() * 1.5; // Random flex-grow between 0.5 and 2
      
      // Generate random title lines (top) - 1-3 segments with random lengths
      const titleSegments = [];
      const numTitleSegments = 1 + Math.floor(Math.random() * 3); // 1-3 segments
      for (let j = 0; j < numTitleSegments; j++) {
        titleSegments.push({
          top: Math.random() * 30, // Random starting position in top 30% of spine
          height: 10 + Math.random() * 15, // Random height between 10-25px
        });
      }
      
      // Generate consistent author lines (bottom) - 1-2 segments
      const authorSegments = [];
      const numAuthorSegments = 1 + Math.floor(Math.random() * 2); // 1-2 segments
      const authorLineHeight = 8; // Consistent height for author lines
      for (let j = 0; j < numAuthorSegments; j++) {
        authorSegments.push({
          bottom: 15 + Math.random() * 10, // Random position in bottom area
          height: authorLineHeight,
        });
      }
      
      books.push({
        color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        flexGrow: flexGrow,
        titleSegments: titleSegments,
        authorSegments: authorSegments,
      });
    }
    return books;
  };

  const books = generateBooks(110);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="bookshelf-header">
        <div className="shelf-plank shelf-plank-top"></div>
        <div className="shelf-edge shelf-edge-top"></div>
        <div className="books-row">
          {books.map((book, i) => (
            <div 
              key={i} 
              className="book-spine"
              style={{ 
                '--book-color': book.color,
                flexGrow: book.flexGrow,
              } as React.CSSProperties}
            >
              {/* Title lines (top) - random lengths */}
              {book.titleSegments.map((segment, segIdx) => (
                <div
                  key={`title-${segIdx}`}
                  className="book-line book-title-line"
                  style={{
                    top: `${segment.top}%`,
                    height: `${segment.height}px`,
                  }}
                />
              ))}
              {/* Author lines (bottom) - consistent lengths */}
              {book.authorSegments.map((segment, segIdx) => (
                <div
                  key={`author-${segIdx}`}
                  className="book-line book-author-line"
                  style={{
                    bottom: `${segment.bottom}px`,
                    height: `${segment.height}px`,
                  }}
                />
              ))}
              <div className="book-dots">
                <div className="book-dot"></div>
                <div className="book-dot"></div>
                <div className="book-dot"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="shelf-edge shelf-edge-bottom"></div>
        <div className="shelf-plank shelf-plank-bottom"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-center h-16 relative">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Skills
            </button>
            <Link
              href="/blog"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="absolute right-0 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}