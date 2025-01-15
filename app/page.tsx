import Image from "next/image";

import { Hero } from "./sections/Hero";
import { Project } from "./sections/Project";
import { FullSeparator } from "./components/FullSeparator";
import { Team } from "./sections/Team";

export default function Home() {
  return (
    <main className="pt-16">
      
      
      <Hero />
      <Project />
      <FullSeparator />
      <Team />
      <FullSeparator />







      
    </main>
  );
}
