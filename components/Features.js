import {
  TruckIcon,
  CogIcon,
  ShoppingBagIcon,
  CalculatorIcon,
  MapPinIcon,
  ChartBarIcon,
} from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'

export default function Features() {
  const t = useTranslations('features')

  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('headline')}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{t('subheadline')}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
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
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <ShoppingBagIcon  className="h-6 w-6 text-white" aria-hidden="true"/>
                </div>
                {t(`features.commerce.name`)}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{t(`features.commerce.description`)}</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <CalculatorIcon  className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {t(`features.accounting.name`)}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{t(`features.accounting.description`)}</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <MapPinIcon  className="h-6 w-6 text-white" aria-hidden="true"/>
                </div>
                {t(`features.pos.name`)}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{t(`features.pos.description`)}</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <ChartBarIcon  className="h-6 w-6 text-white" aria-hidden="true"/>
                </div>
                {t(`features.power.name`)}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{t(`features.power.description`)}</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
