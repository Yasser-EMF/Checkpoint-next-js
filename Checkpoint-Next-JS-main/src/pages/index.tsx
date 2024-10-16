// pages/index.tsx

import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a Full Stack Developer specialized in React and Node.js</p>
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full"
        />
      </main>
    </div>
  );
};

export default Home;
