import { useTranslations } from 'next-intl'
import { Container } from './Container'
import { SectionIntro } from './SectionIntro'

export default function Stats() {
  const t = useTranslations('stats')

  return (
    <>
      <section id="about">
        <SectionIntro title={t('headline')} className="mt-40 sm:mt-32 lg:mt-64 ">
          <p>{t('subheadline')}</p>
          
        </SectionIntro>

        <Container className="mt-16">
          <div className="mx-auto max-w-7xl ">
            <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-200 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                <p className="flex-none text-3xl font-bold tracking-tight text-gray-900"> {t('stat-1')}</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-gray-900">{t('stat-1-title')}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{t('stat-1-body')}</p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                <p className="flex-none text-3xl font-bold tracking-tight text-white"> {t('stat-2')} </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">{t('stat-2-title')}</p>
                  <p className="mt-2 text-base leading-7 text-gray-400">{t('stat-2-body')} </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                <p className="flex-none text-3xl font-bold tracking-tight text-white"> {t('stat-3')}</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white"> {t('stat-3-title')}</p>
                  <p className="mt-2 text-base leading-7 text-indigo-200"> {t('stat-3-body')}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
