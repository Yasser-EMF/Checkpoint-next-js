// src/pages/contact.js
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold">Contact Me</h1>
        <p className="mt-4">Feel free to reach out via email or social media.</p>
      </div>
    </div>
  );
};

export default Contact;
