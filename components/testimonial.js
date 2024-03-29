import { useTranslations } from 'next-intl'
import ReactPlayer from 'react-player'
import { Container } from './Container'
import { SectionIntro } from './SectionIntro'
import { StarIcon} from '@heroicons/react/24/solid'

export default function Testimonials() {
  const t = useTranslations('testimonial')

  return (
    <section id="testimonial" className="bg-indigo-600 mt-40 sm:mt-32 lg:mt-64 py-20 rounded-2xl ">
      <SectionIntro title={t('headline')} invert={true}>
        <p className='text-white'>{t('subheadline')}</p>
        <div className="flex flex-row mt-5">
      
        <StarIcon className="h-5  text-white"/>
        <StarIcon className="h-5  text-white"/>
        <StarIcon className="h-5  text-white"/>
        <StarIcon className="h-5  text-white"/>
        <StarIcon className="h-5  text-white"/>
        </div>
      </SectionIntro>
     
      <Container className="mt-10">
        <div className="player-wrapper mb-5 rounded-2xl overflow-clip shadow-sn mt-10 w-full">
          <ReactPlayer
            className="react-player"
            url="https://vimeo.com/912734605"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </Container>
    </section>
  )
}
