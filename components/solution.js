import Image from 'next/image'
import POS from '@/public/Images/POS.svg'
import BOX from '@/public/Images/Box.svg'
import Handheld from '@/public/Images/handheld.svg'
import Tag from '@/public/Images/Tag.svg'
import { useTranslations } from 'next-intl'
import { Container } from './Container'
import { SectionIntro } from './SectionIntro'
import { FadeIn } from './FadeIn'
export default function Solution() {
  const t = useTranslations('solution')

  return (
    <section id="solution">
      <SectionIntro  title={t('headline')}   className="mt-40 sm:mt-32 lg:mt-64 ">
        <p>{t('subheadline')}</p>
      </SectionIntro>
    
      <Container className="mt-16">
        <div className="flex flex-col gap-y-28 ">


          <FadeIn>
          <div className="flex  lg:flex-row flex-col lg:items-center lg:gap-x-24 ">
            <div className="flex">
              <div className=" xy-auto mx-auto">
                <Image className="h-96 w-96" width={500} height={500} src={Tag} alt="Smart Tag" />
              </div>
            </div>
            <div className="flex flex-col max-w-3xl">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-600"> {t('features.tag.name')} </h3>
                <p className="mt-5 text-md text-gray-500  "> {t('features.tag.description')} </p>
              </div>
              <div className="flex flex-row mt-10 ">
                <dl className="  text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">{t('features.pos.stat-1-description')} </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">{t('features.pos.stat-1')}</dd>
                  </div>
                </dl>
                <dl className="ml-10 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">{t('features.pos.stat-2-description')} </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">{t('features.pos.stat-2')}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          </FadeIn>
          <FadeIn>
          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-x-24">
            <div className="flex">
              <div className=" xy-auto mx-auto">
                <Image className="h-96 w-96" width={500} height={500} src={BOX} alt="Content Reader" />
              </div>
            </div>
            <div className="flex flex-col max-w-3xl">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-600"> {t('features.box.name')} </h3>
                <p className="mt-5 text-md text-gray-500  "> {t('features.box.description')} </p>
              </div>
              <div className="flex flex-row mt-10 ">
                <dl className="  text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">{t('features.box.stat-1-description')} </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">{t('features.box.stat-1')}</dd>
                  </div>
                </dl>
                <dl className="ml-10 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">{t('features.box.stat-2-description')} </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">{t('features.box.stat-2')}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          </FadeIn>
          <FadeIn>
          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-x-24">
            <div className="flex">
              <div className=" xy-auto mx-auto">
                <Image className="h-96 w-96" width={500} height={500} src={Handheld} alt="Handheld Reader" />
              </div>
            </div>
            <div className="flex flex-col max-w-3xl">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-600"> {t('features.handheld.name')} </h3>
                <p className="mt-5 text-md text-gray-500 ">
                  {' '}
                  {t('features.handheld.description')}{' '}
                </p>
              </div>
              <div className="flex flex-row mt-10 ">
                <dl className="  text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">{t('features.handheld.stat-1-description')} </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">
                      {t('features.handheld.stat-1')}
                    </dd>
                  </div>
                </dl>
                <dl className="ml-10 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">{t('features.handheld.stat-2-description')} </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">
                      {t('features.handheld.stat-2')}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          </FadeIn>
          <FadeIn>
          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-x-24">
            <div className="flex">
              <div className=" xy-auto mx-auto">
                <Image className="h-96 w-96" width={500} height={500} src={POS} alt="POS Reader" />
              </div>
            </div>
            <div className="flex flex-col max-w-3xl">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-600"> {t('features.pos.name')} </h3>
                <p className="mt-5 text-md text-gray-500  "> {t('features.pos.description')} </p>
              </div>
              <div className="flex flex-row mt-10 ">
                <dl className="  text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">{t('features.pos.stat-1-description')} </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">{t('features.pos.stat-1')}</dd>
                  </div>
                </dl>
                <dl className="ml-10 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">{t('features.pos.stat-2-description')} </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">{t('features.pos.stat-2')}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          </FadeIn>
         
        </div>
      </Container>
    </section>
  )
}
