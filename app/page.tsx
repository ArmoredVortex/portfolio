// import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black-100 min-h-screen mx-auto flex flex-col">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Projects />
    </main>
  );
}
