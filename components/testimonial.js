import { useTranslations } from 'next-intl'
import ReactPlayer from 'react-player'
import { Container } from './Container'
import { SectionIntro } from './SectionIntro'

export default function Testimonials() {
  const t = useTranslations('testimonial')

  return (
    <section id="testimonial" className="bg-white">
      <SectionIntro title={t('headline')}   className="mt-40 sm:mt-32 lg:mt-64 ">
        <p>{t('subheadline')}</p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="player-wrapper mb-5 rounded-2xl overflow-clip shadow-sn mt-16 w-full">
          <ReactPlayer
            className="react-player"
            url="https://vimeo.com/905437180"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </Container>
    </section>
  )
}
