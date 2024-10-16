// src/pages/about.js
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold">About Me</h1>
        <p className="mt-4">I am passionate about creating exceptional digital experiences.</p>
      </div>
    </div>
  );
};

export default About;
