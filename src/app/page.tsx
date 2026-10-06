import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import SkillsHero from "@/components/portfolio/SkillsHero";
import ActivityGraph from "@/components/portfolio/ActivityGraph";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsGridSection from "@/components/portfolio/SkillsGridSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import CommandPalette from "@/components/portfolio/CommandPalette";

export default function Home() {
  return (
    <div className="wrap">
      <Header />
      <main>
        <Hero />
        <SkillsHero />
        <ActivityGraph />
        <AboutSection />
        <SkillsGridSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <CommandPalette />
    </div>
  );
}
