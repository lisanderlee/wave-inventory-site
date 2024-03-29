'use client'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ReactPlayer from 'react-player/lazy'
import { useTranslations } from 'next-intl'
import { PlayIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

export default function VideoButton({ videoSelector }) {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                  <div className="player-wrapper rounded-2xl overflow-clip shadow-xl  w-full">
                    <ReactPlayer
                      className="react-player"
                      url={videoSelector}
                      width="100%"
                      height="100%"
                      playing={true}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <button type="button" onClick={openModal} className="">

        <div className="">
          <PlayCircleIcon className=" h-[35px] text-indigo-600 hover:text-indigo-900" />
        </div>
      </button>
    </>
  )
}
