'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  id: number;
  date: string;
  content: string;
  title?: string;
}

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    date: '2024-01-15',
    title: 'Building Modern Web Apps',
    content: 'Excited to share my latest project using Next.js and TypeScript. The developer experience has been fantastic!',
  },
  {
    id: 2,
    date: '2024-01-10',
    content: 'Just shipped a new feature using Ruby on Rails. The convention over configuration approach continues to amaze me.',
  },
  {
    id: 3,
    date: '2024-01-05',
    title: 'Thoughts on Tailwind CSS',
    content: 'Tailwind CSS has completely changed how I approach styling. The utility-first approach is perfect for rapid development.',
  },
];

const STORAGE_KEY = 'microblog-posts';

export default function Microblog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    // Load posts from localStorage on mount
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setPosts(JSON.parse(stored));
      } catch (e) {
        // If parsing fails, use defaults
        setPosts(defaultPosts);
      }
    } else {
      setPosts(defaultPosts);
    }
  }, []);

  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts));
  };

  const handleCancel = () => {
    setFormData({ title: '', content: '' });
    setIsFormOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.content.trim()) return;

    const newPost: BlogPost = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      title: formData.title.trim() || undefined,
      content: formData.content.trim(),
    };

    const updatedPosts = [newPost, ...posts];
    savePosts(updatedPosts);
    setFormData({ title: '', content: '' });
    setIsFormOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter((post) => post.id !== id);
      savePosts(updatedPosts);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Microblog
          </h2>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            {isFormOpen ? 'Cancel' : 'New Post'}
          </button>
        </div>

        {isFormOpen && (
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-8"
          >
            <div className="mb-4">
              <label
                htmlFor="post-title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Title (optional)
              </label>
              <input
                id="post-title"
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter a title..."
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="post-content"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Content *
              </label>
              <textarea
                id="post-content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
                placeholder="What's on your mind? (Markdown supported)"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Publish
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 py-12">
              No posts yet. Create your first post!
            </p>
          ) : (
            posts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative group"
              >
                <button
                  onClick={() => handleDelete(post.id)}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400"
                  aria-label="Delete post"
                >
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
                <time className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">
                  {formatDate(post.date)}
                </time>
                {post.title && (
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                )}
                <div className="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => (
                        <p className="mb-4 last:mb-0" {...props} />
                      ),
                      h1: ({ node, ...props }) => (
                        <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2 className="text-xl font-bold mt-5 mb-3" {...props} />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3 className="text-lg font-bold mt-4 mb-2" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="ml-4" {...props} />
                      ),
                      code: ({ node, className, ...props }) => {
                        const isInline = !className;
                        return isInline ? (
                          <code
                            className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono"
                            {...props}
                          />
                        ) : (
                          <code className={className} {...props} />
                        );
                      },
                      pre: ({ node, ...props }) => (
                        <pre
                          className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4"
                          {...props}
                        />
                      ),
                      a: ({ node, ...props }) => (
                        <a
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                          {...props}
                        />
                      ),
                      blockquote: ({ node, ...props }) => (
                        <blockquote
                          className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}