import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-card-foreground pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-gradient">CodeCraft</span> Portfolio
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Building digital experiences that solve real problems for
              businesses and users alike.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/CodeCraft318"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/codecraft-developers-38807936b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCg4wx4e5JbbE1bgO7IhZ34A"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/code.craft318/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="flex flex-col gap-2">
              <p className="text-muted-foreground">codecraft318@gmail.com</p>
              <p className="text-muted-foreground">+91 8424955003</p>
              <p className="text-muted-foreground">Mumbai, Kalyan(East)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Dev Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
