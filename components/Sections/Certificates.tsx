"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Award,
  ExternalLink,
  Download,
  Calendar,
  Shield,
  Code,
  PenTool,
  Database,
  Smartphone,
  Cloud,
  FileText,
} from "lucide-react";
import Image from "next/image";

import Cert1 from "@/public/certificate/alx-prodev.png";
import Cert2 from "@/public/certificate/alx-profestional.png";
import Cert3 from "@/public/certificate/Elleni Bisrat.png";
import Cert4 from "@/public/certificate/ibm-web.png";
import Cert5 from "@/public/certificate/solo-c++.jpg";
import Cert6 from "@/public/certificate/solo-html.jpg";

export default function Certificates() {
  const certificates = [
    {
      id: "alx-prodev",
      title: "Prodev(Advanced) frontend",
      issuer: "ALX",
      date: "2025",
      credentialId: "N2LCHE8Pyn",
      link: "http://savanna.alxafrica.com/certificates/N2LCHE8Pyn",
      downloadLink: "/certificates/alx-prodev.pdf",
      image: Cert1,
      skills: ["React", "Next.js", "TypeScript", "Tailwind", "graphql"],
      category: "Frontend",
      icon: <Code className="w-3 h-3" />,
    },
    {
      id: "alx-foundation",
      title: "Professional foundation",
      issuer: "ALX",
      date: "2025",
      credentialId: "LSXpY35Heh",
      link: "http://savanna.alxafrica.com/certificates/LSXpY35Heh",
      downloadLink: "/certificates/alx-foundation.pdf",
      image: Cert2,
      skills: [
        "Problem Solving",
        "Communication Skills",
        "Research",
        "Personal Development",
      ],
      category: "general",
      icon: <Cloud className="w-3 h-3" />,
    },
    {
      id: "gdg-react",
      title: "React",
      issuer: "GDG",
      date: "2025",
      credentialId: "FSD-789-GHI",
      link: "https://example.com/verify",
      downloadLink: "/certificates/gdg-react.pdf",
      image: Cert3,
      skills: ["React", "git", "js"],
      category: "frontend",
      icon: <Database className="w-3 h-3" />,
    },
    {
      id: "ibm-web",
      title: "web development",
      issuer: "IBM",
      date: "2024",
      credentialId: "UIX-321-JKL",
      link: "https://example.com/verify",
      downloadLink: "/certificates/ibm-web.pdf",
      image: Cert4,
      skills: ["html", "css", "js"],
      category: "front and backend",
      icon: <PenTool className="w-3 h-3" />,
    },
    {
      id: "sololearn-cpp",
      title: "Introduction to c++",
      issuer: "sololearn",
      date: "2023",
      credentialId: "FLT-654-MNO",
      link: "https://www.sololearn.com/certificates/example",
      downloadLink: "/certificates/sololearn-cpp.pdf",
      image: Cert5,
      skills: ["c++"],
      category: "p.language",
      icon: <Smartphone className="w-3 h-3" />,
    },
    {
      id: "sololearn-html",
      title: "Introduction to HTML",
      issuer: "sololearn",
      date: "2023",
      credentialId: "JS-987-PQR",
      link: "https://www.sololearn.com/certificates/example",
      downloadLink: "/certificates/sololearn-html.pdf",
      image: Cert6,
      skills: ["form"],
      category: "Frontend",
      icon: <Code className="w-3 h-3" />,
    },
  ];

  // Direct click handlers to ensure buttons work
  const handleVerify = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (
    e: React.MouseEvent,
    downloadPath: string,
    title: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const link = document.createElement("a");
    link.href = downloadPath;
    link.download = `${title.toLowerCase().replace(/\s+/g, "-")}-certificate.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = () => {
    certificates.forEach((cert, i) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = cert.downloadLink;
        link.download = `${cert.title.toLowerCase().replace(/\s+/g, "-")}-certificate.pdf`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, i * 600);
    });
  };

  return (
    <section
      id="certificates"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <Badge
            variant="outline"
            className="mb-3 px-3 py-1 text-xs border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 inline-flex items-center gap-1"
          >
            <Award className="w-3 h-3" />
            Credentials
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Professional certifications and achievements in various technologies
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="group bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden relative p-0 w-full"
              >
                {/* Image Section */}
                <div className="relative h-24 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50 dark:from-blue-900/10 dark:to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-8 h-8 text-blue-600/20 dark:text-blue-400/20" />
                  </div>
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <CardHeader className="p-3 pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400">
                      {cert.icon}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-3 pt-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <Shield className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">ID: {cert.credentialId}</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    {/* Verify Button - Using Button component with onClick */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-9 text-sm bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 cursor-pointer z-10"
                      onClick={(e) => handleVerify(e, cert.link)}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Verify
                    </Button>

                    {/* Download Button - Using Button component with onClick */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-9 text-sm bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-600 dark:text-gray-400 cursor-pointer z-10"
                      onClick={(e) =>
                        handleDownload(e, cert.downloadLink, cert.title)
                      }
                    >
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
