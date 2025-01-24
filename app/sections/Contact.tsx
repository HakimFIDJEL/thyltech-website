"use client";
import { SectionTitle } from "../components/SectionTitle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, Send, Loader2  } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ContactItem } from "../components/ContactItem";
import { FadeInComponent } from "../components/FadeInComponent";
import { FullSeparator } from "../components/FullSeparator";
import Link from "next/link";
import { useState } from "react";

export function Contact() {

  const [loading, setLoading] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-background flex items-center justify-end flex-col"
      id="contact"
    >
        <SectionTitle
          title="Contactez-nous"
          subtitle="Nous sommes à votre écoute pour toute question ou suggestion"
        />
        <FullSeparator />
      <div className="container px-4 md:px-6 border-l border-r border-border  pt-8 pb-16">

        <div className="flex flex-col md:flex-row gap-8">
          <FadeInComponent className="w-full md:w-1/2 space-y-6">
            <p className="text-medium font-semibold text-center">
              Notre formulaire de contact
            </p>
            <Separator />
            <form className="space-y-4" onSubmit={() => setLoading(true)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Nom
                </label>
                <Input id="name" placeholder="Votre nom" required />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" required />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message"
                  rows={5}
                  className="resize-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={loading}>
                <Send className={`h-4 w-4 ${loading ? 'hidden' : 'block'}`} />
                <Loader2 className={`animate-spin h-4 w-4 ${loading ? 'block' : 'hidden'}`} />
                Envoyer
              </Button>
            </form>
          </FadeInComponent>

          <Separator orientation="vertical" className="h-100 hidden md:block" />
          <Separator orientation="horizontal" className="w-full block md:hidden" />

          <FadeInComponent className="w-full md:w-1/2 space-y-6">
            <p className="text-medium font-semibold text-center">
              Nos coordonnées
            </p>
            <Separator />

            <div>
              <ContactItem
                name="Email"
                href="mailto:contact@ig2i.fr"
                icon={<Mail className="h-4 w-4" />}
              />

              <Separator />

              <ContactItem
                name="LinkedIn"
                href="https://www.linkedin.com/company/thyltech"
                icon={<Linkedin className="h-4 w-4" />}
              />

              <Separator />

              <Link href="/Thyltech_Plaquette.pdf" target="_blank" download>
                <Button className="flex items-center justify-center w-full gap-2 mt-4">
                  <Download className="h-4 w-4"/>
                  Téléchargez notre plaquette
                </Button>
              </Link>
            </div>

          
          </FadeInComponent>
        </div>
      </div>
    </section>
  );
}
