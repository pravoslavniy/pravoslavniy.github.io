import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-content2 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:drone" width={32} height={32} className="text-primary" />
              <h3 className="font-bold text-xl">Drone Academy</h3>
            </div>
            <p className="text-foreground-500 mb-4">
              Empowering the next generation of drone pilots with cutting-edge training and technology.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-foreground-500 hover:text-primary text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-foreground-500 hover:text-primary text-xl" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Icon icon="lucide:youtube" className="text-foreground-500 hover:text-primary text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon icon="lucide:linkedin" className="text-foreground-500 hover:text-primary text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground-500 hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-foreground-500 hover:text-primary">About Us</Link></li>
              <li><Link to="/courses" className="text-foreground-500 hover:text-primary">Our Courses</Link></li>
              <li><Link to="/partners" className="text-foreground-500 hover:text-primary">Our Partners</Link></li>
              <li><Link to="/news" className="text-foreground-500 hover:text-primary">News</Link></li>
              <li><Link to="/contact" className="text-foreground-500 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses/agro-drone" className="text-foreground-500 hover:text-primary">Agro Drone</Link></li>
              <li><Link to="/courses/sports-drone" className="text-foreground-500 hover:text-primary">Sports Drone Piloting</Link></li>
              <li><Link to="/courses/fpv-drone" className="text-foreground-500 hover:text-primary">FPV Drone Courses</Link></li>
              <li><Link to="/courses/engineering" className="text-foreground-500 hover:text-primary">Engineering School</Link></li>
              <li><Link to="/courses/piloting" className="text-foreground-500 hover:text-primary">Drone Piloting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon icon="lucide:map-pin" className="text-primary mt-1" />
                <span className="text-foreground-500">123 Drone Street, Bucharest, Romania</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:phone" className="text-primary mt-1" />
                <span className="text-foreground-500">+40 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:mail" className="text-primary mt-1" />
                <span className="text-foreground-500">info@droneacademy.ro</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:clock" className="text-primary mt-1" />
                <span className="text-foreground-500">Mon - Fri: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-divider mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Drone Academy. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-foreground-500 hover:text-primary text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-foreground-500 hover:text-primary text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-foreground-500 hover:text-primary text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
