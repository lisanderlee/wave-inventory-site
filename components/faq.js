import { useTranslations } from "next-intl";

const faqs = [
    {
      question: 'How do you make holy water?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    // More questions...
  ]
  
  export default function FAQ() {
    const t = useTranslations('faq');
    const keys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'];

    return (
      <div  id="faq" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">        {t("headline")}</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
              {t("subheadline")}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                {t("cta")}
                </a>
             
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {keys.map((key) => (
                  <div key={key}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">{t(`questions.${key}.question`)}</dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{t(`questions.${key}.answer`)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
  