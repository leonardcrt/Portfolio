import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AreasOfFocus from "@/components/AreasOfFocus";
import Projects from "@/components/Projects";
import Background from "@/components/Background";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <Nav />
      <div id="about">
        <Hero />
      </div>
      <AreasOfFocus />
      <Projects />
      <div id="background">
        <Background />
      </div>
      <Contact />
    </main>
  );
}
