import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaGooglePlay, FaApple, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
        
        <div className="flex flex-col items-start mb-4 lg:mb-0 w-full">
          {/* <img src={Logo} alt="Institute Logo" className="w-10 h-auto mb-4" /> */}
          <h3 className="text-xl font-semibold mb-2">Learn Oscale</h3>
          <p className="text-sm mt-2">
            <FaMapMarkerAlt className="inline-block mr-2 text-gray-300" />
            LearnOscale Pvt. Ltd., 2nd Floor, Balaji Tower, Old Buratkhana Road, Near Rukmani Modern School, Alwar, Rajasthan - 301001
          </p>
          <p className="text-sm mt-2">
            <FaPhone className="inline-block mr-2 text-gray-300" />
            +91-9587901199
          </p>
          <p className="text-sm mt-2">
            <FaEnvelope className="inline-block mr-2 text-gray-300" />
            support@learnoscale.com
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Follow us on:</p>
            <div className="flex gap-4 text-lg mt-2">
              <FaFacebook className="cursor-pointer hover:text-blue-600 transition-all duration-300" />
              <FaTwitter className="cursor-pointer hover:text-blue-400 transition-all duration-300" />
              <FaGooglePlay className="cursor-pointer hover:text-green-500 transition-all duration-300" />
              <FaApple className="cursor-pointer hover:text-gray-500 transition-all duration-300" />
              <FaLinkedin className="cursor-pointer hover:text-blue-700 transition-all duration-300" />
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4 text-gray-300">Company</h5>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-sm hover:text-blue-400 transition-colors duration-300">About Us</Link></li>
            <li><Link to="/careers" className="text-sm hover:text-blue-400 transition-colors duration-300">Careers</Link></li>
            <li><Link to="/teach-online" className="text-sm hover:text-blue-400 transition-colors duration-300">Teach Online With Us</Link></li>
            <li><Link to="/media" className="text-sm hover:text-blue-400 transition-colors duration-300">Media</Link></li>
            <li><Link to="/sitemap" className="text-sm hover:text-blue-400 transition-colors duration-300">Sitemap</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4 text-gray-300">Contact Us</h5>
          <ul className="space-y-2">
            <li><Link to="/resellers" className="text-sm hover:text-blue-400 transition-colors duration-300">Resellers</Link></li>
            <li><Link to="/coaching" className="text-sm hover:text-blue-400 transition-colors duration-300">Coaching</Link></li>
            <li><Link to="/school" className="text-sm hover:text-blue-400 transition-colors duration-300">School</Link></li>
            <li><Link to="/college" className="text-sm hover:text-blue-400 transition-colors duration-300">College</Link></li>
            <li><Link to="/educators" className="text-sm hover:text-blue-400 transition-colors duration-300">Educators</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4 text-gray-300">More</h5>
          <ul className="space-y-2">
            <li><Link to="/challenge-zone" className="text-sm hover:text-blue-400 transition-colors duration-300">Challenge Zone</Link></li>
            <li><Link to="/just-ask" className="text-sm hover:text-blue-400 transition-colors duration-300">Just Ask</Link></li>
            <li><Link to="/ebooks" className="text-sm hover:text-blue-400 transition-colors duration-300">E-Books</Link></li>
            <li><Link to="/learn-earn" className="text-sm hover:text-blue-400 transition-colors duration-300">Learn & Earn</Link></li>
            <li><Link to="/blogs" className="text-sm hover:text-blue-400 transition-colors duration-300">Blogs</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4 text-gray-300">Policies</h5>
          <ul className="space-y-2">
            <li><Link to="/user-policy" className="text-sm hover:text-blue-400 transition-colors duration-300">User Policy</Link></li>
            <li><Link to="/terms-conditions" className="text-sm hover:text-blue-400 transition-colors duration-300">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="text-sm hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="text-sm hover:text-blue-400 transition-colors duration-300">Refund Policy</Link></li>
            <li><Link to="/faq" className="text-sm hover:text-blue-400 transition-colors duration-300">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-4 text-gray-300">Products</h5>
          <ul className="space-y-2">
            <li><Link to="/online-courses" className="text-sm hover:text-blue-400 transition-colors duration-300">Online Courses</Link></li>
            <li><Link to="/test-series" className="text-sm hover:text-blue-400 transition-colors duration-300">Test Series</Link></li>
            <li><Link to="/live-test" className="text-sm hover:text-blue-400 transition-colors duration-300">Live Test</Link></li>
            <li><Link to="/practise" className="text-sm hover:text-blue-400 transition-colors duration-300">Practice</Link></li>
            <li><Link to="/exams" className="text-sm hover:text-blue-400 transition-colors duration-300">Exams</Link></li>
            <li><Link to="/challenge-zone" className="text-sm hover:text-blue-400 transition-colors duration-300">Challenge Zone</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-8 text-gray-400">
        <p>&copy; 2024 LMS Platform. All rights reserved.</p>
        <p className="mt-2">Follow us on: <span className="text-blue-400 cursor-pointer">Twitter</span> | <span className="text-blue-400 cursor-pointer">LinkedIn</span></p>
      </div>
    </footer>
  );
};

export default Footer;