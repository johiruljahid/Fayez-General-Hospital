import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, Activity } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'appointment', label: 'Book Appointment' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> Emergency: +1 (800) 123-4567</span>
            <span>|</span>
            <span>Open 24/7 for Emergency Services</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>location@medicare.com</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-slate-800">MediCare<span className="text-blue-600">AI</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`${
                    activePage === item.id 
                      ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                      : 'text-slate-600 hover:text-blue-600'
                  } transition-colors duration-200 py-2`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => onNavigate('appointment')}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-xl font-bold">MediCare<span className="text-blue-400">AI</span></span>
            </div>
            <p className="text-slate-400 text-sm">
              Providing world-class healthcare with the power of advanced technology and compassionate care.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Pediatrics</li>
              <li>Orthopedics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>123 Hospital Drive, New York, NY</li>
              <li>info@medicareai.com</li>
              <li>+1 (800) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency</h3>
            <p className="text-slate-400 text-sm mb-4">In case of emergency, please call us immediately.</p>
            <div className="text-2xl font-bold text-blue-400">911</div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} MediCare AI Hospital. All rights reserved.
        </div>
      </footer>
    </div>
  );
};