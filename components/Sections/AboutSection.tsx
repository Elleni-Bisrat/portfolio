"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Code2,
  Palette,
  BookOpen,
  Globe,
  Download,
  Linkedin,
  Github,
  Twitter,
  Award,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ProfileImage from "@/public/images/profile.jpg";

export default function AboutMe() {
  const personalInfo = [
    {
      icon: <User className="w-3 h-3" />,
      label: "Full Name",
      value: "Elleni Bisrat",
    },
    {
      icon: <Mail className="w-3 h-3" />,
      label: "Email",
      value: "ellenibisrat16@gmail.com",
    },
    {
      icon: <MapPin className="w-3 h-3" />,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
    },
    { icon: <Calendar className="w-3 h-3" />, label: "Born", value: "1995" },
  ];

  const professionalInfo = [
    {
      icon: <Briefcase className="w-3 h-3" />,
      label: "Experience",
      value: "2+ Years",
    },
    {
      icon: <GraduationCap className="w-3 h-3" />,
      label: "Education",
      value: "AASTU",
    },
    {
      icon: <Code2 className="w-3 h-3" />,
      label: "Projects",
      value: "5+ Completed",
    },
    {
      icon: <Award className="w-3 h-3" />,
      label: "Certifications",
      value: "10+ Earned",
    },
  ];

  const timeline = [
    {
      year: "2024 - 2025",
      title: "Frontend Developer",
      company: "GDG hackathon",
      description:
        "Built responsive web applications using React and Next.js .",
    },
    {
      year: "2024",
      title: "UI/UX Designer",
      company: "Kefita PLC",
      description:
        "Designed user interfaces and experiences for mobile and web platforms.",
    },
    {
      year: "2025",
      title: "HerCommerce Hackathon frontend developer",
      company: "Alx",
      description: "Participated in Womens e-commerce hackathon.",
    },
  ];

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/resume/elleni_resume.pdf";
    link.download = "Elleni_Bisrat_Resume.pdf"; // The filename for download
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
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
            <User className="w-3 h-3" />
            About Me
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
              Who I Am
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Get to know me better - my journey, skills, and what drives me
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
              <div className="lg:w-1/3">
                <div className="sticky top-24">
                  <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="relative p-4 flex justify-center">
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-gray-800">
                          <Image
                            src={ProfileImage}
                            alt="Elleni Bisrat"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-3 pt-0 text-center">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                        Elleni Bisrat
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                        Full Stack Developer & UI/UX Designer
                      </p>

                      <div className="flex items-center justify-center gap-2 mb-4">
                        <a
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href="mailto:elleni.b@example.com"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>

                      <Button onClick={handleDownloadResume} className="w-full bg-gradient-to-r from-blue-600 to-gray-800 hover:from-blue-700 hover:to-gray-900 text-white text-sm py-4 h-auto rounded-full group">
                        <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                        Download Resume
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:w-2/3 space-y-3">
                {/* Bio */}
                <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      My Story
                    </h3>
                    <div className="space-y-1 text-[12px] text-gray-600 dark:text-gray-400">
                      <p>
                        I'm a passionate Software Engineering student and
                        Frontend Developer with over 2 years of hands-on
                        experience building modern, responsive web applications.
                        I focus on creating clean, user-friendly interfaces
                        using technologies like React, Next.js, Tailwind CSS,
                        Node.js, and MongoDB.
                      </p>
                      <p>
                        My journey started during university where I discovered
                        my passion for both development and design. Since then,
                        I have built full-stack projects and mobile applications
                        using Flutter and Firebase.
                      </p>
                      <p>
                        I believe in writing clean, maintainable code and
                        designing intuitive user experiences. I'm continuously
                        learning and improving my skills to grow into a
                        professional full-stack developer while specializing in
                        frontend and UI/UX excellence.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        Personal Details
                      </h4>
                      <div className="space-y-2">
                        {personalInfo.map((item, idx) => (
                          <div key={idx} className="flex items-center text-xs">
                            <span className="w-16 text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              {item.icon}
                              {item.label}:
                            </span>
                            <span className="text-gray-800 dark:text-gray-200 font-medium">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-4">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        Professional Stats
                      </h4>
                      <div className="space-y-2">
                        {professionalInfo.map((item, idx) => (
                          <div key={idx} className="flex items-center text-xs">
                            <span className="w-20 text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              {item.icon}
                              {item.label}:
                            </span>
                            <span className="text-gray-800 dark:text-gray-200 font-medium">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">
                <span className="bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
                  Journey & Experience
                </span>
              </h3>

              <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-gray-800 opacity-30"></div>

                <div className="space-y-6">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-10">
                      <div className="absolute left-0 top-1 w-8 h-8 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      </div>

                      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                              {item.title}
                            </h4>
                            <Badge
                              variant="outline"
                              className="text-[8px] border-blue-200 dark:border-blue-800"
                            >
                              {item.year}
                            </Badge>
                          </div>
                          <p className="text-[10px] text-blue-600 dark:text-blue-400 mb-2">
                            {item.company}
                          </p>
                          <p className="text-[10px] text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
