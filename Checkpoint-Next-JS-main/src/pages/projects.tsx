// pages/projects.tsx

import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const projects = [
  {
    title: 'Project One',
    description: 'A web application built with React and Node.js',
    image: '/images/project1.png'
  },
  {
    title: 'Project Two',
    description: 'A mobile app built using React Native',
    image: '/images/project2.png'
  }
];

const Projects: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="p-10">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="shadow-lg p-4 rounded-lg bg-white">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-md"
              />
              <h2 className="text-2xl mt-4">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
