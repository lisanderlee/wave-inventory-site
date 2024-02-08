
import { useNow, useTimeZone } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import NextIntlProvider from "./NextIntlProvider";
import { Inter } from "next/font/google";
import "../globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WaveInventory",
  description: "Tracking Today's Inventory for Tomorrow's Success. RFID Techbnology.",
  verification: {
    google:
      "google-site-verification=kQJazAGSleHI3J2oocJLmlb67yVy92rWdTzLZb7B4DE",
  },
};



export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function LocaleLayout({ children, params }) {
  let messages;

  try {
    messages = (await import(`../../messages/${params.locale}.json`))
      .default;
  } catch (error) {
    notFound();
  }




  return (
    <html lang={params.locale}>

      <body className="  overflow-x-hidden ">
        <NextIntlProvider
          locale={params.locale}
          messages={messages}
          timeZone="America/New_York"
          now={new Date()}
        >
          {children}
        </NextIntlProvider>
      </body>
    </html>
  );
}
