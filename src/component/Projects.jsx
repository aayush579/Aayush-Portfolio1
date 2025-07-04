import React from 'react';

const projects = [
  { title: 'Employee Management System', desc: 'A Python OOP system to manage employees.' },
  { title: 'To-Do List App', desc: 'Simple task manager built using Python.' },
  { title: 'Rock Paper Scissors Game', desc: 'A fun game with UI made in Python.' }
];

export default function Projects() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, i) => (
          <div key={i} className="p-4 border rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p className="mt-2">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}