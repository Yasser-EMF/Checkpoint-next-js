// src/pages/index.js
import Navbar from '../components/Navbar';
import Image from 'next/image';
import profilePic from '../../public/images/profile.jpg'; // Update the path based on your image location

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <Image src={profilePic} alt="Profile Picture" className="rounded-full" width={150} height={150} />
        <h2 className="text-3xl mt-4">Welcome to My Portfolio</h2>
        <p className="mt-2 text-lg">I am a Full Stack Developer and UX/UI Designer.</p>
      </div>
    </div>
  );
};

export default Home;
