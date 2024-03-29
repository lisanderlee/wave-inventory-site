import {
  TruckIcon,
  CogIcon,
  ShoppingBagIcon,
  CalculatorIcon,
  MapPinIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import { SectionIntro } from './SectionIntro'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
export default function Features() {
  const t = useTranslations('features')

  return (
    <section id="features">
      <SectionIntro title={t('headline')}   className="mt-40 sm:mt-32 lg:mt-64 ">
        <p>{t('subheadline')}</p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="mx-auto max-w-2xl  lg:max-w-none">

          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <FadeIn>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <TruckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {t(`features.logistics.name`)}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{t(`features.logistics.description`)}</p>
              </dd>
            </div>
            </FadeIn>
            <FadeIn>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <CogIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {t(`features.production.name`)}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{t(`features.production.description`)}</p>
              </dd>
            </div>
            </FadeIn>
            <FadeIn>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <ShoppingBagIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {t(`features.commerce.name`)}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{t(`features.commerce.description`)}</p>
              </dd>
            </div>
            </FadeIn>
            <FadeIn>
            
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <CalculatorIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {t(`features.accounting.name`)}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{t(`features.accounting.description`)}</p>
              </dd>
            </div>
            </FadeIn>
            <FadeIn>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <MapPinIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {t(`features.pos.name`)}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{t(`features.pos.description`)}</p>
              </dd>
            </div>
            </FadeIn>
            <FadeIn>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <ChartBarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {t(`features.power.name`)}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{t(`features.power.description`)}</p>
              </dd>
            </div>
            </FadeIn>
        
          </dl>
        </div>
      </Container>
    </section>
  )
}
