"use server";

import nodemailer from "nodemailer";
import { renderToString } from "react-dom/server";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/lib/templates/email";
import React from "react";


export async function sendAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const htmlBody = await compileTemplate(name, email, message);

  await sendMail({
    body: htmlBody,
  });
}

// Envoi de mail
export async function sendMail({
  body,
}: {
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD, THYLTECH_EMAIL } = process.env;

  // Configuration du transporteur SMTP
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  // Vérification de la connexion au serveur SMTP
  try {
    const testResult = await transport.verify();
    console.log("Connected to SMTP server: ", testResult);
  } catch (error) {
    console.error("Error connecting to SMTP server: ", error);
    return;
  }

  // Envoi de l'e-mail  
  try {
    const sendResult = await transport.sendMail({
      from: "no-reply@tyltech.com",
      to: THYLTECH_EMAIL,
      subject: "Thyltech - Nouveau message de contact",
      html: body, // Utilisation du corps HTML généré par React
    });

    console.log("Email sent: ", sendResult);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}


// Génération de template de mail dynamique
export async function compileTemplate(name: string, email: string, message: string) {
  const date = new Date().toLocaleDateString();

  // Conversion du composant React en chaîne HTML

  const htmlBody = await render(
    <EmailTemplate name={name} email={email} message={message} date={date} />
  );
  // const htmlBody = "";


  return htmlBody;
}
