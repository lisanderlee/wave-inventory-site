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
    const keys = [
        'logistics',
        'production',
        'commerce',
        'accounting',
        'pos',
        'power',
    ]
    // const icons = [ <TruckIcon  className="h-6 w-6 text-white" aria-hidden="true" />, <CogIcon  className="h-6 w-6 text-white" aria-hidden="true" />, <ShoppingBagIcon  className="h-6 w-6 text-white" aria-hidden="true"/>, <CalculatorIcon  className="h-6 w-6 text-white" aria-hidden="true" />, <MapPinIcon  className="h-6 w-6 text-white" aria-hidden="true"/>, <ChartBarIcon  className="h-6 w-6 text-white" aria-hidden="true"/>]

    return (
        <div id="features" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {t('headline')}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {t('subheadline')}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {keys.map((key, index) => (
                            <li key={key} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <TruckIcon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {t(`features.${key}.name`)}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">
                                        {t(`features.${key}.description`)}
                                    </p>
                                </dd>
                            </li>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
