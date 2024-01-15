import About from "@/components/about";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/contact";
import Portfolio from "@/components/portfolio";

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
