import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-4 text-sm text-gray-400 dark:text-gray-600">
      &copy; {new Date().getFullYear()} UNOFFICIAL DADDY. All rights reserved.
    </footer>
  );
}