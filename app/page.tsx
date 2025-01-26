import { Hero } from "./sections/Hero";
import { Project } from "./sections/Project";
import { FullSeparator } from "./components/FullSeparator";
import { Team } from "./sections/Team";
import { School } from "./sections/School";
import { Contact } from "./sections/Contact";
import { Planning } from "./sections/Planning";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { TopButton } from "./components/TopButton";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Project />
        <FullSeparator />
        <Team />
        <FullSeparator />
        <School />
        <FullSeparator />
        <Planning />
        <FullSeparator />
        <Contact />
        <FullSeparator />
      </main>
      
      <Footer />

      <TopButton />
      <Toaster />
    </>
  );
}
