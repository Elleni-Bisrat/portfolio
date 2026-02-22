"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ArrowUp,
  Code2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-3.5 h-3.5" />,
      name: "GitHub",
      href: "https://github.com",
      username: "@elleni-b",
    },
    {
      icon: <Linkedin className="w-3.5 h-3.5" />,
      name: "LinkedIn",
      href: "https://linkedin.com",
      username: "in/elleni-b",
    },
    {
      icon: <Twitter className="w-3.5 h-3.5" />,
      name: "Twitter",
      href: "https://twitter.com",
      username: "@elleni_b",
    },
    {
      icon: <Instagram className="w-3.5 h-3.5" />,
      name: "Instagram",
      href: "https://instagram.com",
      username: "@elleni.design",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800">
      {/* Background Decorative Elements - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"></div>
        <div className="absolute top-0 right-10 w-48 h-48 bg-gray-300 dark:bg-gray-700/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          {/* Top Section with Newsletter - Optional */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
                Stay Updated
              </span>
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to get notifications about new projects and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="h-9 text-xs border-gray-200 dark:border-gray-700 focus-visible:ring-blue-600 bg-white/80 dark:bg-gray-800/80"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-gray-800 hover:from-blue-700 hover:to-gray-900 text-white text-xs px-4 h-9 rounded-full whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand Column */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-gray-800 rounded-lg transform rotate-3"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-gray-700 rounded-lg transform -rotate-3"></div>
                  <div className="absolute inset-0.5 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">
                      EB
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
                  Elene B.
                </span>
              </div>
              <p className="text-[9px] text-gray-500 dark:text-gray-400 mb-3 max-w-xs mx-auto md:mx-0">
                Crafting beautiful digital experiences with modern web
                technologies. Full Stack Developer & UI/UX Designer based in
                Ethiopia.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                {socialLinks.slice(0, 3).map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Quick Links
              </h4>
              <ul className="space-y-1.5">
                {quickLinks.slice(0, 4).map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-[9px] text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-3">
                More
              </h4>
              <ul className="space-y-1.5">
                {quickLinks.slice(4).map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-[9px] text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Column */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Connect
              </h4>
              <div className="space-y-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-2 text-[9px] text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span>{social.username}</span>
                  </a>
                ))}
                <a
                  href="mailto:ellenibisrat16@gmail.com"
                  className="flex items-center justify-center md:justify-start gap-2 text-[9px] text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group mt-2"
                >
                  <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>ellenibisrat16@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[8px] text-gray-500 dark:text-gray-400 order-2 sm:order-1">
                © {currentYear} Elene B. All rights reserved.
              </p>

              <Button
                onClick={scrollToTop}
                size="sm"
                className="order-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 h-7 px-2 rounded-full text-[8px] gap-1"
              >
                <ArrowUp className="w-2.5 h-2.5" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
