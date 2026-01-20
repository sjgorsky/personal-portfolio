import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-2xl">
            <a
              href="https://country-flags-qmihbw7xf-sjgorskys-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/previews/world_flags_screenshot.png"
                  alt="Country Flags website preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Country Flags
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    An interactive world and US state flags single page application built with React and Tailwind CSS.
                </p>
                <span className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2">
                  View Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
