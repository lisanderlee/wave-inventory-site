'use client'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ReactPlayer from 'react-player/lazy'
import { useTranslations } from 'next-intl'
import { PlayIcon } from '@heroicons/react/20/solid'

export default function VideoButton() {
  const t = useTranslations('hero')
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
                      url="https://vimeo.com/905381922"
                      width="100%"
                      height="100%"
                      controls={true}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="w-full flex mt-10 justify-center">
        <button
          type="button"
          onClick={openModal}
          className="group inline-flex ring-1 z-20 items-center py-4 px-6 ring-white rounded-full hover:bg-white/20 "
        >
          {' '}
          <div className="mr-3">
            <PlayIcon className="h-4 w-4 text-white " />
          </div>
          <p className="flex font-bold text-sm text-white">{t('cta')}</p>
        </button>
      </div>
    </>
  )
}
