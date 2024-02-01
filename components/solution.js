import Image from "next/image"
import POS from "@/public/Images/POS.svg"
import BOX from "@/public/Images/Box.svg"
import Handheld from "@/public/Images/handheld.svg"
import Tag from "@/public/Images/Tag.svg"
import gif from "@/public/Images/giphy.gif"
import { useTranslations } from "next-intl";
import { PlayIcon } from "@heroicons/react/24/outline"
import { motion, useScroll, useSpring, Variants } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Solution() {
  const t = useTranslations('solution');
  const sectionVariants = {
    offscreen: {
      y: 20,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
        damping: 10,
      },
    },
  }




  return (
    <div id="solution" className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl   font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("headline")}      </h2>
          <p className="mt-6 text-base leading-7 mb-5 text-gray-600">
            {t("subheadline")}            </p>
          {/* <a href="#" className="font-semibold   text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            {t("solution.videocta")}     <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>

        <div className="flex flex-col mt-10  gap-y-28 ">


        <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >


          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-x-24 ">
            <div className="flex">
              <div className=" xy-auto mx-auto">
                <Image className="h-96 w-96"
                  width={500}
                  height={500}
                  src={Tag}
                  alt="Smart Tag" />
              </div>
            </div>
            <div className="flex flex-1 flex-col w-96">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-600"> {t("features.tag.name")} </h3>
                <p className="mt-5 text-md text-gray-500"> {t("features.tag.description")} </p>
              </div>
              <div className="flex flex-row mt-10 ">
              <dl className="  text-gray-900 ">
                 {/* <div>
                  <PlayIcon className="h-14 w-14 text-gray-900 " />
                  </div>
                  <Image className=" absolute h-12 w-12 hover:h-36 hover:w-36"
                  width={150}
                  height={150}
                  src={gif} /> */}
                </dl>
                <dl className="  text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">baja de costo</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">1000</dd>
                  </div>
                </dl>
                <dl className="ml-10 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">baja de costo</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">1000</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          </motion.div>
          <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >

          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-x-24">
            <div className="flex">
              <div className=" xy-auto mx-auto">
                <Image className="h-96 w-96"
                  width={500}
                  height={500}
                  src={BOX} 
                  alt="Content Reader" />
              </div>
            </div>
            <div className="flex flex-1 flex-col w-96">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-600"> {t("features.box.name")} </h3>
                <p className="mt-5 text-md text-gray-500"> {t("features.box.description")} </p>
              </div>
              <div className="flex flex-row mt-10 ">
                <dl className="  text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">baja de costo</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">1000</dd>
                  </div>
                </dl>
                <dl className="ml-10 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">baja de costo</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">1000</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          </motion.div>
          <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >

          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-x-24">
            <div className="flex">
              <div className=" xy-auto mx-auto">
                <Image className="h-96 w-96"
                  width={500}
                  height={500}
                  src={Handheld} 
                  alt="Handheld Reader" />
              </div>
            </div>
            <div className="flex flex-1 flex-col w-96">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-600"> {t("features.handheld.name")} </h3>
                <p className="mt-5 text-md text-gray-500"> {t("features.handheld.description")} </p>
              </div>
              <div className="flex flex-row mt-10 ">
                <dl className="  text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">baja de costo</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">1000</dd>
                  </div>
                </dl>
                <dl className="ml-10 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">baja de costo</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">1000</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          </motion.div>

          <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-x-24">
            <div className="flex">
              <div className=" xy-auto mx-auto">
                <Image className="h-96 w-96"
                  width={500}
                  height={500}
                  src={POS} 
                  alt="POS Reader" />
              </div>
            </div>
            <div className="flex flex-1 flex-col w-96">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-indigo-600"> {t("features.pos.name")} </h3>
                <p className="mt-5 text-md text-gray-500"> {t("features.pos.description")} </p>
              </div>
              <div className="flex flex-row mt-10 ">
                <dl className="  text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">baja de costo</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">1000</dd>
                  </div>
                </dl>
                <dl className="ml-10 text-gray-900 ">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900 pl-6">
                    <dt className="text-sm leading-6">baja de costo</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight">1000</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
