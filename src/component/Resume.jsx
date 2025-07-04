import React from 'react';

export default function Resume() {
  return (
    <section className="p-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Resume</h2>
      <a
        href="https://your-resume-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
      >
        Download Resume
      </a>
    </section>
  );
}