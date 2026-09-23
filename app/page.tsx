import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AreasOfFocus from "@/components/AreasOfFocus";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Background from "@/components/Background";
import Capabilities from "@/components/Capabilities";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AreasOfFocus />
        <FeaturedProject />
        <Projects />
        <Background />
        <Capabilities />
        <Currently />
        <Contact />
      </main>
    </>
  );
}
