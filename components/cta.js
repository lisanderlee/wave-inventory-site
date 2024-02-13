import { useTranslations } from 'next-intl'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
export default function CTA() {
  const t = useTranslations('cta')

  return (
    <FadeIn >
    <Container className="mt-40 sm:mt-32 lg:mt-64 ">
      <div className="bg-indigo-600 rounded-2xl p-12 lg:p-24  relative">
        <svg
          className="absolute inset-0 z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('headline')}</h2>
        <h2 className="text-3xl mt-2 font-bold tracking-tight text-white sm:text-4xl">{t('ctaheadline')}</h2>
        <button className="mt-10 flex items-center gap-x-6 ">
          <a
            href="#contact"
            className="rounded-md bg-white/90 hover:bg-white  px-3.5 py-2.5 z-50 text-sm font-semibold text-indigo-600 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t('ctabutton')}
          </a>
        </button>
      </div>
    </Container>
    </FadeIn>
  )
}
