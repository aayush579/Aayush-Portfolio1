import React from 'react';

export default function Contact() {
  return (
    <section className="p-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>Email: your.email@example.com</p>
      <p>LinkedIn: <a className="text-blue-400 underline" href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a></p>
      <p>GitHub: <a className="text-blue-400 underline" href="https://github.com/yourgithub" target="_blank">github.com/yourgithub</a></p>
    </section>
  );
}
