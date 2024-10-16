// src/components/Navbar.jsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div>
        <Link href="/" className="mr-4 hover:underline">
          Home
        </Link>
        <Link href="/about" className="mr-4 hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
