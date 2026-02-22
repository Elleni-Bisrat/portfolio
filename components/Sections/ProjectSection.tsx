'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  FolderKanban,
  Star,
  GitFork,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Project1 from "@/public/images/movie.png";
import Project2 from "@/public/images/e-commerc.png";
import Project3 from "@/public/images/silent-g.png";
import Project4 from "@/public/images/se-resource.png";

export default function Projects() {
  const projects = [
    {
      title: "Movie Recommendation Website",
      description:
        "A movie recommendation platform that allows users to explore, search, and discover movies based on preferences, featuring dynamic filtering and personalized suggestions.",
      image: Project1,
      tags: ["Next.js", "TypeScript"],
      github:
        "https://github.com/Elleni-Bisrat/project-nexus-movie-recommendation",
      live: "https://project-nexus-movie-recommendation-green.vercel.app/",
      stars: 1,
      forks: 2,
      date: "2025",
    },
    {
      title: "E-Commerce Platform",
      description:
        "An e-commerce application with product browsing, shopping cart functionality, secure authentication, and order management built using Next.js, Node.js, and MongoDB.",
      image: Project2,
      tags: ["Next.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Elleni-Bisrat/e-commerce",
      live: "https://e-commerce-taupe-sigma-55.vercel.app/",
      stars: 1,
      forks: 1,
      date: "2026",
    },
    {
      title: "Gesture App",
      description:
        "A Flutter-based mobile application that uses gesture interactions and Firebase backend services to provide real-time data handling and smooth cross-platform user experience.",
      image: Project3,
      tags: ["Flutter", "Firebase"],
      github: "https://github.com/Elleni-Bisrat/Gesture_app",
      live: "https://gesture-app-delta.vercel.app/",
      stars: 1,
      forks: 1,
      date: "2025",
    },
    {
      title: "SE-Resource",
      description:
        "A resource management system designed for software engineering students, enabling organized access to academic materials, handouts, and educational resources with an intuitive UI.",
      image: Project4,
      tags: ["React", "Tailwind", "php"],
      github: "https://github.com/Elleni-Bisrat/GROUP4_IPII_PROJECT",
      live: "https://resource-management-three.vercel.app/",
      stars: 1,
      forks: 5,
      date: "2025",
    },
  ];

  // Direct click handlers for better reliability
  const handleGithubClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleLiveClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-300 dark:bg-gray-700/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-100 dark:bg-blue-800/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <Badge
            variant="outline"
            className="mb-3 px-3 py-1 text-xs border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 inline-flex items-center gap-1"
          >
            <FolderKanban className="w-3 h-3" />
            My Work
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden relative p-0 w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-gray-800 opacity-0 group-hover:opacity-5 transition-opacity duration-200"></div>

                <div className="relative h-24 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="p-3 pb-0">
                  <div className="flex items-start justify-between">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-0.5">
                        <Star className="w-3 h-3" />
                        {project.stars}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {project.forks}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="p-3 pt-2">
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] text-gray-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {/* GitHub Button - Using Button component for better clickability */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-xs bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-600 dark:text-gray-400 cursor-pointer z-10"
                      onClick={(e) => handleGithubClick(e, project.github)}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>

                    {/* Live Demo Button - Using Button component for better clickability */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8 text-xs bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 cursor-pointer z-10"
                      onClick={(e) => handleLiveClick(e, project.live)}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Elleni-Bisrat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-gray-800 hover:from-blue-700 hover:to-gray-900 text-white px-6 py-3 h-auto text-sm rounded-full group cursor-pointer"
          >
            View All Projects
            <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
