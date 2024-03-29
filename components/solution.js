import Image from 'next/image'
import POS from '@/public/Images/POS.svg'
import BOX from '@/public/Images/Box.svg'
import { CheckIcon } from '@heroicons/react/20/solid'
import Handheld from '@/public/Images/handheld.svg'
import Tag from '@/public/Images/Tag.svg'
import { useTranslations } from 'next-intl'
import { Container } from './Container'
import { SectionIntro } from './SectionIntro'
import { FadeIn } from './FadeIn'
import VideoButton from './video-button'

export default function Solution() {
  const t = useTranslations('solution')

  return (
    <section id="solution">
      <SectionIntro title={t('headline')} className="mt-40 sm:mt-32 lg:mt-64 ">
        <p>{t('subheadline')}</p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="flex flex-col gap-y-12 ">
          <FadeIn>
            <div className="flex bg-slate-200 rounded-2xl lg:p-8  p-5 pb-10 lg:pb-0 lg:flex-row flex-col lg:items-center lg:gap-x-24 ">
              <div className="flex">
                <div className=" xy-auto mx-auto">
                  <Image className="h-96 w-96" width={500} height={500} src={Tag} alt="Smart Tag" />
                </div>
              </div>
              <div className="flex flex-col max-w-3xl">
                <div className="flex flex-col">
                  <div className="flex flex-col ">
                    <h3 className="text-5xl flex font-bold text-indigo-600"> {t('features.tag.name')} </h3>
                  </div>

                  <ul className="mt-5 ml-5 text-lg text-gray-500">
                    <li className="list-disc">{t('features.tag.line-1')}</li>
                    <li className="list-disc">{t('features.tag.line-2')}</li>
                    <li className="list-disc">{t('features.tag.line-3')}</li>
                    <li className="list-disc	 ">{t('features.tag.line-4')}</li>
                    <li className="list-disc	 ">{t('features.tag.line-5')}</li>
                  </ul>
                  {/* <p className=" text-md text-gray-500 mt-5 "> {t('features.tag.description')} </p> */}
                </div>
                <div className="flex flex-row mt-10 ">
                  <dl className="  text-gray-900 ">
                    <div className="flex flex-col  lg:items-center gap-y-3 ">
                      <VideoButton videoSelector="videos/tag.mp4" />
                      <dt className="text-xs lg:text-sm lg:leading-6 leading-1  text-indigo-600 font-bold ">{t('videocta')} </dt>
                    </div>
                  </dl>
                  <dl className=" lg:ml-10 ml-5 text-gray-900 ">
                    <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                      <dt className=" text-xs lg:text-sm    leading-4 leading-1">{t('features.tag.stat-1-description')} </dt>
                      <dd className="order-first text-2xl lg:text-3xl font-semibold tracking-tight">{t('features.tag.stat-1')}</dd>
                    </div>
                  </dl>
                  <dl className="lg:ml-10 ml-5 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                      <dt className=" text-xs lg:text-sm    leading-4 leading-1">{t('features.tag.stat-2-description')} </dt>
                      <dd className="order-first text-2xl lg:text-3xl font-semibold tracking-tight">{t('features.tag.stat-2')}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex  bg-slate-200 rounded-2xl lg:p-8  p-5 pb-10 lg:pb-0  lg:flex-row flex-col lg:items-center lg:gap-x-24">
              <div className="flex">
                <div className=" xy-auto mx-auto">
                  <Image className="h-96 w-96" width={500} height={500} src={BOX} alt="Content Reader" />
                </div>
              </div>
              <div className="flex flex-col max-w-3xl">
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <h3 className="text-5xl font-bold text-indigo-600"> {t('features.box.name')} </h3>
                  </div>
                  <ul className="mt-5 ml-5 text-lg text-gray-500">
                    <li className="list-disc">{t('features.box.line-1')}</li>
                    <li className="list-disc">{t('features.box.line-2')}</li>
                    <li className="list-disc">{t('features.box.line-3')}</li>
                    <li className="list-disc	 ">{t('features.box.line-4')}</li>
                    <li className="list-disc	 ">{t('features.box.line-5')}</li>
                  </ul>
                  {/* <p className="mt-5 text-md text-gray-500  "> {t('features.box.description')} </p> */}
                </div>
                <div className="flex flex-row mt-10 ">
                  <dl className="  text-gray-900 ">
                    <div className="flex flex-col  lg:items-center gap-y-3 ">
                      <VideoButton videoSelector="videos/box.mp4" />
                      <dt className="text-xs lg:text-sm lg:leading-6 leading-1  text-indigo-600 font-bold ">{t('videocta')} </dt>
                    </div>
                  </dl>
                  <dl className=" lg:ml-10 ml-5 text-gray-900 ">
                    <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                      <dt className=" text-xs lg:text-sm    leading-4 leading-1">{t('features.box.stat-1-description')} </dt>
                      <dd className="order-first text-2xl lg:text-3xl font-semibold tracking-tight">{t('features.box.stat-1')}</dd>
                    </div>
                  </dl>
                  <dl className="lg:ml-10 ml-5 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                      <dt className=" text-xs lg:text-sm    leading-4 leading-1">{t('features.box.stat-2-description')} </dt>
                      <dd className="order-first text-2xl lg:text-3xl font-semibold tracking-tight">{t('features.box.stat-2')}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex lg:flex-row bg-slate-200 rounded-2xl lg:p-8  p-5 pb-10 lg:pb-0  flex-col lg:items-center lg:gap-x-24">
              <div className="flex">
                <div className=" xy-auto mx-auto">
                  <Image className="h-96 w-96" width={500} height={500} src={Handheld} alt="Handheld Reader" />
                </div>
              </div>
              <div className="flex flex-col max-w-3xl">
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <h3 className="text-5xl font-bold text-indigo-600"> {t('features.handheld.name')} </h3>
                  </div>
                  <ul className="mt-5 ml-5 text-lg text-gray-500">
                    <li className="list-disc">{t('features.handheld.line-1')}</li>
                    <li className="list-disc">{t('features.handheld.line-2')}</li>
                    <li className="list-disc">{t('features.handheld.line-3')}</li>
                    <li className="list-disc	 ">{t('features.handheld.line-4')}</li>
                
                  </ul>
                </div>
                <div className="flex flex-row mt-10 ">
                  <dl className="  text-gray-900 ">
                    <div className="flex flex-col  lg:items-center gap-y-3 ">
                      <VideoButton videoSelector="videos/handheld.mp4" />
                      <dt className="text-xs lg:text-sm lg:leading-6 leading-1  text-indigo-600 font-bold ">{t('videocta')} </dt>
                    </div>
                  </dl>
                  <dl className=" lg:ml-10 ml-5 text-gray-900 ">
                    <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                      <dt className=" text-xs lg:text-sm    leading-4 leading-1">{t('features.handheld.stat-1-description')} </dt>
                      <dd className="order-first text-2xl lg:text-3xl font-semibold tracking-tight">{t('features.handheld.stat-1')}</dd>
                    </div>
                  </dl>
                  <dl className="lg:ml-10 ml-5 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                      <dt className=" text-xs lg:text-sm    leading-4 leading-1">{t('features.handheld.stat-2-description')} </dt>
                      <dd className="order-first text-2xl lg:text-3xl font-semibold tracking-tight">{t('features.handheld.stat-2')}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex bg-slate-200 rounded-2xl lg:p-8  p-5 pb-10 lg:pb-0   lg:flex-row flex-col lg:items-center lg:gap-x-24">
              <div className="flex">
                <div className=" xy-auto mx-auto">
                  <Image className="h-96 w-96" width={500} height={500} src={POS} alt="POS Reader" />
                </div>
              </div>
              <div className="flex flex-col max-w-3xl">
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <h3 className="text-5xl font-bold text-indigo-600"> {t('features.pos.name')} </h3>
                  </div>
                  <ul className="mt-5 ml-5 text-lg text-gray-500">
                    <li className="list-disc">{t('features.pos.line-1')}</li>
                    <li className="list-disc">{t('features.pos.line-2')}</li>
                    <li className="list-disc">{t('features.pos.line-3')}</li>
                    <li className="list-disc	 ">{t('features.pos.line-4')}</li>
                    <li className="list-disc	 ">{t('features.pos.line-5')}</li>
                  </ul>
                </div>
                <div className="flex flex-row mt-10 ">
                  <dl className="  text-gray-900 ">
                    <div className="flex flex-col  lg:items-center gap-y-3 ">
                      <VideoButton videoSelector="videos/pos.mp4" />
                      <dt className="text-xs lg:text-sm lg:leading-6 leading-1  text-indigo-600 font-bold ">{t('videocta')} </dt>
                    </div>
                  </dl>
                  <dl className=" lg:ml-10 ml-5 text-gray-900 ">
                    <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                      <dt className=" text-xs lg:text-sm    leading-4 leading-1">{t('features.pos.stat-1-description')} </dt>
                      <dd className="order-first text-2xl lg:text-3xl font-semibold tracking-tight">{t('features.pos.stat-1')}</dd>
                    </div>
                  </dl>
                  <dl className="lg:ml-10 ml-5 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                      <dt className=" text-xs lg:text-sm    leading-4 leading-1">{t('features.pos.stat-2-description')} </dt>
                      <dd className="order-first text-2xl lg:text-3xl font-semibold tracking-tight">{t('features.pos.stat-2')}</dd>
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
