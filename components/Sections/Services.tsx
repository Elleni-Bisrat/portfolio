import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Palette,
  Smartphone,
  ArrowRight,
  Rocket,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-3.5 h-3.5" />,
      title: "Web Dev",
      description: "React, Next.js, Node.js apps",
      features: ["Responsive", "API", "Performance"],
      gradient: "from-blue-600 to-gray-800",
    },
    {
      icon: <Palette className="w-3.5 h-3.5" />,
      title: "UI/UX Design",
      description: "User-centered design",
      features: ["Research", "Wireframes", "Prototypes"],
      gradient: "from-blue-600 to-gray-800",
    },
    {
      icon: <Smartphone className="w-3.5 h-3.5" />,
      title: "Mobile Dev",
      description: "iOS & Android apps",
      features: ["Cross-platform", "Native", "Store Ready"],
      gradient: "from-blue-600 to-gray-800",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-300 dark:bg-gray-700/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-3 sm:px-4">
        <div className="text-center max-w-xl mx-auto mb-8">
          <Badge
            variant="outline"
            className="mb-2 px-2 py-0.5 text-[10px] border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 inline-flex items-center gap-1"
          >
            <Rocket className="w-2.5 h-2.5" />
            Services
          </Badge>

          <h2 className="text-xl sm:text-2xl font-bold mb-1">
            <span className="bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-600 bg-clip-text text-transparent">
              What I Do
            </span>
          </h2>

          <p className="text-xs text-gray-600 dark:text-gray-400">
            Fast, reliable solutions for your needs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="
                group bg-white/95 dark:bg-gray-800/95 
                border border-gray-200 dark:border-gray-700 
                hover:shadow-md transition-all duration-200 
                hover:-translate-y-0.5 overflow-hidden relative 
                w-full max-w-[280px] sm:max-w-[260px] 
                basis-[calc(50%-0.75rem)] sm:basis-auto
              "
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200`}
              ></div>

              <CardHeader className="p-2 pb-0">
                <div className="flex items-center justify-between">
                  <div
                    className={`p-1.5 bg-gradient-to-br ${service.gradient} rounded-md text-white shadow-xs`}
                  >
                    {service.icon}
                  </div>

                  {index === 0 && (
                    <span className="text-[12px] font-medium bg-gradient-to-r from-blue-600 to-gray-800 text-white px-1 py-0.5 rounded">
                      top
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-1.5">
                  {service.title}
                </CardTitle>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 line-clamp-1 leading-tight">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="p-2 pt-1">
                <div className="space-y-0.5 mb-1.5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <div className="w-0.5 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      <span className="text-[10px] text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full h-5 text-[10px] px-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  more
                  <ArrowRight className="ml-0.5 h-2 w-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}