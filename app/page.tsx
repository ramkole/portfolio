import AboutMe from "@/components/AboutMe";
import HeaderHero from "@/components/HeaderHero";
import Projects from "@/components/ProjectSection";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HeaderHero />
      <SectionDivider />
      <AboutMe />
      <Projects />
      <Skills />
    </main>
  );
}
