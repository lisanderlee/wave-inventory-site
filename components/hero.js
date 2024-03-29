'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import POS from '@/public/Images/POS.svg'
import BOX from '@/public/Images/Box.svg'
import Handheld from '@/public/Images/handheld.svg'
import { Container } from './Container'
import VideoButton from './video-button'
export default function Hero() {
  const t = useTranslations('hero')

  return (
    <div className=" bg-indigo-600 h-screen flex">
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
      <Container className="mx-auto h-full justify-center  items-center flex text-center ">
        <div className="flex flex-col -mt-14 ">
          <h1 className="mx-auto leading-tight z-30 max-w-8xl text-5xl mt-10  lg:mt-0 font-medium tracking-tight  lg:text-9xl">
            <span className='  text-cyan-500 font-bold'>{t('tracking')}</span>
            <span className=' text-gray-200'>{t('today')}</span>
            <span className=' text-cyan-500 font-bold'>{t('inventory')}</span>
            <span className=' text-gray-200'>{t('tomorrow')}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl lg:text-2xl font-bold mt-10 text-white">{t('highlight')}</p>

          <p className="mx-auto max-w-4xl text-base  mt-3 text-white lg:text-xl">{t('subheadline')}</p>

          {/* <div className="w-full flex  justify-center">
          <VideoButton />
        </div> */}
        </div>
        {/* <div className=" flex flex-col items-center gap-y-10 lg:flex-row mb-5 overflow-clip   justify-between mt-16 w-full">
          <div>
            <Image alt="Box Scan" src={BOX} width={280} height={280} />
            <div className="">
              <p className="text-sm text-white font-semibold text-center "> {t('box')}</p>
            </div>
          </div>
          <div>
            <Image alt="Handheld Scan" src={Handheld} width={280} height={280} />
            <div className="">
              <p className="text-sm text-white font-semibold text-center "> {t('handheld')}</p>
            </div>
          </div>
          <div>
            <Image alt="POS Tools" src={POS} width={280} height={280} />
            <div className="">
              <p className="text-sm text-white font-semibold text-center "> {t('pos')}</p>
            </div>
          </div>
        </div> */}
      </Container>
    </div>
  )
}
