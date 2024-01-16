import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </main>
  );
}
