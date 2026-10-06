import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import SkillsHero from "@/components/portfolio/SkillsHero";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsGridSection from "@/components/portfolio/SkillsGridSection";
import OfferingsSection from "@/components/portfolio/OfferingsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="wrap">
      <Header />
      <main>
        <Hero />
        <SkillsHero />
        <AboutSection />
        <SkillsGridSection />
        <OfferingsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
