"use client"
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Solution from "@/components/solution";
import Features from "@/components/Features";
import Testimonials from "@/components/testimonial";
import CTA from "@/components/cta";
import { Integrations } from "@/components/integrations";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import { Footer } from "@/components/footer";
import { motion, useScroll, useSpring, Variants } from "framer-motion";




export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  const sectionVariants = {
    offscreen: {
      y: 50,
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
  const sectionVariants1 = {
    offscreen: {
      y: -2,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.1,
        damping: 10,
      },
    },
  }
  return (

    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <motion.div
        variants={sectionVariants1}
        initial="offscreen"
        whileInView="onscreen"
      >
        <Hero />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
        <Stats />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
      <Solution />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
      <Features />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
      <Testimonials />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
      <CTA />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
      <Integrations />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
      <FAQ />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
      <Contact />
      </motion.div>
      <Footer />
    </>
  )
}
