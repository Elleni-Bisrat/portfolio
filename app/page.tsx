import Hero from "@/components/Sections/HeroSection";
import AboutMe from "@/components/Sections/AboutSection";
import Certificates from "@/components/Sections/Certificates";
import Projects from "@/components/Sections/ProjectSection";
import Services from "@/components/Sections/Services";
import TechStack from "@/components/Sections/TechStacks";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <TechStack />
      <Services />
      <Projects />
      <Certificates />
      <AboutMe />
      <Contact />
    </div>
  );
}
