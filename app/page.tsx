import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
