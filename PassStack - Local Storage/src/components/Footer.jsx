import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
        <p>
          © {new Date().getFullYear()} <a href="/" className="font-semibold text-indigo-600 dark:text-indigo-400">PassStack</a> | Built to protect. Designed to remember.
        </p>
        <p>
          Crafted with 💙 by <a href="https://github.com/VanshAgrawal52" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">Vansh Agrawal</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;