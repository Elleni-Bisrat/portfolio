"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b px-4 from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800 py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo with description */}
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
                Elene B.
              </h2>
            </Link>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 max-w-xs">
              Full Stack Developer crafting beautiful digital experiences with
              modern web technologies.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Elleni-Bisrat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/elleni-bisrat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full px-4 py-2 h-auto text-sm gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </Button>

          {/* Copyright */}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {currentYear} Elene B. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
