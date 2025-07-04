import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ToggleDark() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full shadow bg-gray-200 dark:bg-gray-800"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}