"use client";

import { NextIntlClientProvider } from "next-intl";


export default function NextIntlProvider({
  messages,
  locale,
  children,
  now,
  timeZone,
}) {

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      defaultTranslationValues={{
        i: (text) => <i>{text}</i>,
      }}
      now={now}
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  );
}
