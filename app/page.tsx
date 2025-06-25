import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center felx-column overflow-hidden mx-auto flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}
