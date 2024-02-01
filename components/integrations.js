import Image from 'next/image'
import integrations from "../public/Images/integrations.svg"
import { useTranslations } from "next-intl";

export function Integrations() {
    const t = useTranslations('integrations');

    return (
        <div id='integrations' className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">


            <div className="mx-auto max-w-2xl lg:mx-0 mb-32 ">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t("headline")}
                </h2>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    {t("subheadline")}
                </p>
            </div>
            <Image  width={1250} height={540} src={integrations} alt='Integrations'/>

        </div>
        </div>
    )
}



