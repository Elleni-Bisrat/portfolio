import { Badge } from "@/components/ui/badge";
import {
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiFlutter,
  SiTailwindcss,
  SiShadcnui,
  SiFigma,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiRedux,
  SiVuedotjs,
  SiGraphql,
} from "react-icons/si";
import {
  Code2,
  Palette,
  Server,
  Globe,
  Database,
  Smartphone,
} from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-5 h-5" />,
      skills: [
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
      ],
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Shadcn UI", icon: SiShadcnui, color: "#000000" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Git", icon: SiGit, color: "#F05032" },
      ],
    },
  ];

  const allSkills = categories.flatMap((cat) => cat.skills);

  return (
    <section
      id="tech-stack"
      className="relative   sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gray-300 dark:bg-gray-700/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
              Tech Stack & Skills
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
            A comprehensive overview of the technologies and tools I work with
            to bring ideas to life.
          </p>
        </div>

        {/* Skills Cloud - Visual Representation */}
        <div className="mb-20 p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Skills Cloud
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {allSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative px-5 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-default hover:scale-110 hover:border-blue-300 dark:hover:border-blue-700 flex items-center gap-2">
                    <Icon className="w-4 h-4" style={{ color: skill.color }} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
