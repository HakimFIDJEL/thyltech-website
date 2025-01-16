import { FullSeparator } from "../components/FullSeparator";
import { SectionTitle } from "../components/SectionTitle";

export function Planning() {
  return (
    <section className="relative overflow-hidden bg-background flex items-center justify-end flex-col" id="planning">
        <SectionTitle
          title="Le Planning"
          subtitle="Découvrez le calendrier de notre projet"
        />
        <FullSeparator />
      <div className="container px-4 md:px-6 border-l border-r border-border  py-8 ">
      </div>
    </section>
  );
}
