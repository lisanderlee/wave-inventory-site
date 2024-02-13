'use client'
import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from './Container'
import { NavLink } from '@/components/NavLink'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'


function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-white"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M0 1H14M0 7H14M0 13H14" className={clsx('origin-center transition', open && 'scale-90 opacity-0')} />
      <path d="M2 2L12 12M12 2L2 12" className={clsx('origin-center transition', !open && 'scale-90 opacity-0')} />
    </svg>
  )
}

function MobileNavigation() {
  const nav = useTranslations('navigation')
  const keys = ['solution', 'features', 'testimonial', 'integrations', 'faq']
  const pathname = usePathname()
  let lenguage

  if (pathname === '/en') {
    lenguage = (
      <Link href="/es" className="text-sm font-medium leading-6 hover:bg-white/20 py-1 px-3 hover:rounded-full text-white">
        Español
      </Link>
    )
  } else {
    lenguage = (
      <Link href="/en" className="text-sm font-medium leading-6 hover:bg-white/20 py-1 px-3 hover:rounded-full text-white">
        English
      </Link>
    )
  }

  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col gap-y-7 rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {keys.map((key) => (
              <Link key={key} href={nav(`${key}.href`)} className="text-sm font-semibold leading-6 text-indigo-600">
                {nav(`${key}.name`)}
              </Link>
            ))}
            {lenguage}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export default function Header() {
  const nav = useTranslations('navigation')
  const keys = ['solution', 'features', 'testimonial', 'integrations', 'faq']
  const pathname = usePathname()
  let lenguage

  if (pathname === '/en') {
    lenguage = (
      <Link href="/es" className="text-sm font-medium leading-6 hover:bg-white/20 py-1 px-3 hover:rounded-full text-white">
        Español
      </Link>
    )
  } else {
    lenguage = (
      <Link href="/en" className="text-sm font-medium leading-6 hover:bg-white/20 py-1 px-3 hover:rounded-full text-white">
        English
      </Link>
    )
  }

  return (
    <header className="bg-indigo-600">
      <Container>
        <nav className="relative mt-5 z-50 flex justify-between items-center">
          <Link href="/" className="pb-2 ">
            <span className="sr-only">WaveInventory</span>
            <p className="font-extrabold text-2xl  text-white">
              <span className=" font-extrabold italic">Wave</span>Inventory
            </p>
          </Link>
          <div className=" items-center hidden md:flex md:gap-x-6">
            {keys.map((key) => (
              <Link key={key} href={nav(`${key}.href`)} className="text-sm font-medium leading-6 hover:bg-white/20 py-1 px-3 hover:rounded-full text-white">
                {nav(`${key}.name`)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">{lenguage}</div>
            <div className=''>
            <Link
              href={nav(`contact.href`)}
              className="-mx-3 block px-4 text-sm font-medium py-2 leading-7  bg-white/90 hover:bg-white rounded-full  text-indigo-600 "
            >
              {nav(`contact.name`)}
            </Link>
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
