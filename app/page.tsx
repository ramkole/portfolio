import AboutMe from "@/components/AboutMe";
import HeaderHero from "@/components/HeaderHero";
import Projects from "@/components/ProjectSection";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HeaderHero />
      <SectionDivider />
      <Skills />
      {/* <WorkExperience /> */}
      {/* <Projects /> */}
      <AboutMe />
    </main>
  );
}
