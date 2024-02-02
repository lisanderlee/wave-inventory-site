
import { useNow, useTimeZone } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import NextIntlProvider from "./NextIntlProvider";
import { Inter } from "next/font/google";
import "../globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WaveInventory - Tracking Today's Inventory for Tomorrow's Success.",
  description: "Tracking Today's Inventory for Tomorrow's Success.",
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

      <body>
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
