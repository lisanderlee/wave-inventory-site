import { useTranslations } from 'next-intl'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
import { RocketLaunchIcon, ViewfinderCircleIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function Benefits() {
  const t = useTranslations('benefits')

  return (
    <>
      <section id="benefits">
        {/* <SectionIntro title={t('headline')} className="mt-40 sm:mt-32 lg:mt-64 ">
          <p>{t('subheadline')}</p>
          <Link href="[slug/about" className="text-sm font-bold  mt-10 leading-6 text-black">
            More about us  <span aria-hidden="true">→</span>
          </Link>
        </SectionIntro> */}

        <Container className="lg:-mt-16 mt-16">
          <div className="mx-auto  ">
            <div className="flex lg:flex-row lg:gap-x-8  flex-col gap-y-7 justify-between gap-x-5">
              <FadeIn>
                <div className="flex max-w-96   h-[420px] flex-col gap-y-8 justify-between rounded-2xl bg-gray-900 p-8">
                  <ViewfinderCircleIcon className="h-12 text-white" />
                  <p className="flex-none text-3xl font-bold tracking-tight text-white">{t('headline-1')}</p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="mt-2 text-base leading-7 text-white">{t('subheadline-1')} </p>{' '}
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="flex flex-col max-w-96  h-[420px] gap-y-8 justify-between rounded-2xl bg-gray-900 p-8">
                  <CurrencyDollarIcon className="h-12 text-white" />
                  <p className="flex-none text-3xl font-bold tracking-tight text-white">{t('headline-2')} </p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="mt-2 text-base leading-7 text-white">{t('subheadline-2')}</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="flex flex-col max-w-96  h-[420px] gap-y-8 justify-between rounded-2xl  bg-gray-900 p-8">
                  <RocketLaunchIcon className="h-12 text-white" />
                  <p className="flex-none text-3xl font-bold tracking-tight text-white"> {t('headline-3')} </p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="mt-2 text-base leading-7 text-white">{t('subheadline-3')} </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
