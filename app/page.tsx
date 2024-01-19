import IntroSection from "./@intro/page";
import AboutSection from "./@about/page";
import SkillsSection from "./@skills/page";
import ExperienceSection from "./@experience/page";
import ProjectsSection from "./@projects/page";
import ContactSection from "./@contact/page";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
