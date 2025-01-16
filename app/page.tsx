import Image from "next/image";

import { Hero } from "./sections/Hero";
import { Project } from "./sections/Project";
import { FullSeparator } from "./components/FullSeparator";
import { Team } from "./sections/Team";
import { School } from "./sections/School";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <main className="pt-16">
      
      
      <Hero />
      <Project />
      <FullSeparator />
      <Team />
      <FullSeparator />
      <School />
      <FullSeparator />
      Section Planning
      <FullSeparator />
      <Contact />
      <FullSeparator />






      
    </main>
  );
}
