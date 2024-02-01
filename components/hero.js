"use client"
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, PlayIcon } from '@heroicons/react/24/outline'
import { useTranslations } from "next-intl";
import Image from 'next/image';
import POS from "@/public/Images/POS.svg"
import BOX from "@/public/Images/Box.svg"
import Handheld from "@/public/Images/handheld.svg"
import ReactPlayer from 'react-player/lazy'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navigation = [
    { name: 'Solucion', href: '#solucion' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'FAQ', href: '#FAQ' },

]

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations('hero');
    const nav = useTranslations('navigation');
    const pathname = usePathname();
    const keys = ['solution', 'features', 'testimonial', 'integrations', 'faq'];
    let lenguage;

    if (pathname === "/en") {
        lenguage = <Link href="/es" className="text-sm font-semibold leading-6 text-white">
            Español
        </Link>
    } else {
        lenguage = <Link href="/en" className="text-sm font-semibold leading-6 text-white">
            English
        </Link>
    }



    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className=" bg-indigo-600 ">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">WaveInventory</span>
                            <p className='font-extrabold text-xl  text-white'><span className=' font-extrabold italic'>Wave</span>Inventory</p>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {keys.map((key) => (
                            <a key={key} href=    {nav(`${key}.href`)} className="text-sm font-semibold leading-6 text-white">
                              {nav(`${key}.name`)} 
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-20">
                        {lenguage}
                        <a href= {nav(`contact.href`)} className="text-sm font-semibold leading-6 text-white">
                        {nav(`contact.name`)}  <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>


                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">WaveInventory</span>
                                <p className='font-bold text-xl  text-white'>WaveInventory</p>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                {lenguage}
                                <div className="py-6">
                                    <a
                                        href={nav(`contact.href`)}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                    >
                                   {nav(`contact.name`)}
                                    </a>
                                </div>

                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <div className="relative isolate pt-14">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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


                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex flex-col lg:items-center 	">
                    <div className="mx-auto max-w-5xl lg:mx-0 lg:flex-auto w-full flex flex-col items-center">
                        <h1 className="text-5xl leading-tight text-center font-bold tracking-tight text-white lg:text-8xl">
                            {t("headline")}
                        </h1>
                        <p className='  text-center text-white text-2xl mt-10 font-bold'>{t("highlight")}</p>
                        <p className="mt-3 text-lg  max-w-4xl leading-7 text-center  text-white lg:text-xl">
                            {t("subheadline")}
                        </p>
                    </div>

                    <div className='w-full flex  justify-center'>
                        <button type="button"
                            onClick={openModal} className='mt-14  z-50 shadow-xl bg-gray-900 py-3   items-center gap-x-4 rounded-full flex flex-row active:bg-gray-900 hover:bg-gray-800  pl-6 pr-4  '>
                            <p className='flex font-bold text-white'>
                                {t("cta")}
                            </p>
                            <div className='flex items-center justify-center bg-indigo-600 h-12 w-12 rounded-full '>
                                <PlayIcon className="h-6 w-6 text-white " />
                            </div>

                        </button>
                    </div>


                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-hidden">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-gray-900  text-left align-middle shadow-xl transition-all">


                                            <div className='player-wrapper rounded-2xl overflow-clip shadow-xl  w-full'>

                                                <ReactPlayer
                                                    className='react-player'
                                                    url='https://vimeo.com/905381922'
                                                    width='100%'
                                                    height='100%'
                                                    controls='true'

                                                />
                                            </div>



                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>















                    <div className=' flex flex-col items-center gap-y-10 lg:flex-row mb-5 overflow-clip   justify-between mt-16 w-full'>
                        <div>
                            <Image
                                alt='Box Scan'
                                src={BOX}
                                width={300}
                                height={300} />
                            <div className=''>
                                <p className='text-xl text-[#59DFFD] font-bold text-center '> {t("box")}</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                alt='Handheld Scan'
                                src={Handheld}
                                width={300}
                                height={300} />
                            <div className=''>
                                <p className='text-xl text-[#59DFFD] font-bold text-center '> {t("handheld")}</p>
                            </div>
                        </div>
                        <div>
                            <Image
                                alt='POS Tools'
                                src={POS}
                                width={300}
                                height={300} />
                            <div className='mt-3'>
                                <p className='text-xl text-[#59DFFD] font-bold text-center '> {t("pos")}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}