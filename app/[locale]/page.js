'use client'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Solution from '@/components/solution'
import Features from '@/components/Features'
import Testimonials from '@/components/testimonial'
import CTA from '@/components/cta'
import { Integrations } from '@/components/integrations'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import { Footer } from '@/components/footer'
import Benefits from '@/components/benefits'


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
    <Benefits />
        <Stats />

        <Solution />

        <Features />

        <Testimonials />

        <CTA />

        <Integrations />

        <FAQ />

      <Contact />
      </main>
     <Footer />
    </>
  )
}
