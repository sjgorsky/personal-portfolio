export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} Scott Gorsky. All rights reserved.
        </p>
      </div>
    </footer>
  );
}