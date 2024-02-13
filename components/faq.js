import { useTranslations } from 'next-intl'
import { Container } from './Container'

import { FadeIn } from './FadeIn'
export default function FAQ() {
  const t = useTranslations('faq')
  const keys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']

  return (
    <section id="faq" className="bg-white">
   <Container className="mt-40 sm:mt-32 lg:mt-64 ">
       <FadeIn >
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
       
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900"> {t('headline')}</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {t('subheadline')}
              <a href="#contact" className="font-semibold text-indigo-600 hover:text-indigo-500"><br></br>
                {t('cta')}
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
        </FadeIn>
      </Container>
    </section>
  )
}
