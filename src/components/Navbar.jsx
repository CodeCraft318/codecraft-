
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    // { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold flex items-center gap-2"
        >
          <span className="text-gradient">Code</span>
          <span className="hidden sm:block">Craft</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                ? 'text-primary font-semibold'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="ml-2">
            <Link to="/contact">Hire Me</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full pt-16 pb-6 px-6">
          <nav className="flex flex-col gap-2 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-lg font-medium ${location.pathname === link.path
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-foreground hover:bg-accent/10'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-4 w-full">
              <Link to="/contact">Hire Me</Link>
            </Button>
          </nav>
          <div className="mt-auto text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeCraft
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
