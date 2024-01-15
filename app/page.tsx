import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

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
