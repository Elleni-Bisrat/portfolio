import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import HeroImage from "@/public/images/image.png";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Hero() {
  const techStack = [
    "Express.js",
    "React",
    "Next.js",
    "MongoDB",
    "Flutter",
    "Tailwind",
    "Shadcn",
    "UI/UX",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-400 dark:bg-gray-700/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-800/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content - Mobile First */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting Badge */}
            <Badge
              variant="outline"
              className="mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 inline-flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for work
            </Badge>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
                Elleni Bisrat
              </span>
            </h1>

            {/* Dynamic Role */}
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                Full Stack Developer & UI/UX Designer
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting beautiful digital experiences with modern web
              technologies. Specialized in building scalable applications that
              solve real-world problems with elegant design and robust
              architecture.
            </p>

            {/* Tech Stack Badges */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                Tech Stack & Expertise
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-gray-800 hover:from-blue-700 hover:to-gray-900 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Image - Mobile First */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <div className="relative flex flex-col items-center justify-center">
              {/* Decorative background for image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>

              {/* Image Container - Circular */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mb-8 sm:mb-10">
                {/* Rotating Border Animation */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-gray-600 to-blue-600 animate-spin-slow"></div>

                {/* Image Container */}
                <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-gray-800">
                  <div className="relative w-full h-full">
                    <Image
                      src={HeroImage}
                      alt="Elleni Bisrat - Full Stack Developer"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay gradient for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-overlay"></div>
                  </div>
                </div>

                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-full shadow-inner shadow-blue-500/50 dark:shadow-blue-400/30"></div>
              </div>

              {/* Social Media Icons - Horizontal below circle */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 mt-2">
                {/* GitHub */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity"></div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800 w-10 h-10 sm:w-12 sm:h-12 shadow-lg group border border-gray-200 dark:border-gray-700"
                    asChild
                  >
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </a>
                  </Button>
                </div>

                {/* LinkedIn */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity"></div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800 w-10 h-10 sm:w-12 sm:h-12 shadow-lg group border border-gray-200 dark:border-gray-700"
                    asChild
                  >
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </a>
                  </Button>
                </div>

                {/* Twitter/X */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity"></div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800 w-10 h-10 sm:w-12 sm:h-12 shadow-lg group border border-gray-200 dark:border-gray-700"
                    asChild
                  >
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </a>
                  </Button>
                </div>

                {/* Instagram */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity"></div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800 w-10 h-10 sm:w-12 sm:h-12 shadow-lg group border border-gray-200 dark:border-gray-700"
                    asChild
                  >
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </a>
                  </Button>
                </div>

                {/* Email */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity"></div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800 w-10 h-10 sm:w-12 sm:h-12 shadow-lg group border border-gray-200 dark:border-gray-700"
                    asChild
                  >
                    <a href="mailto:elleni@example.com" aria-label="Email">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-gradient-to-b from-blue-600 to-gray-800 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
