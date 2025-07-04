import React from 'react';

const skills = ['Python', 'C++', 'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git'];

export default function Skills() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}