import { useTranslations } from "next-intl";
import ReactPlayer from 'react-player'

export default function Testimonials() {
    const t = useTranslations('testimonial');

  return (
    <div id="testimonial" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("headline")} </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          {t("subheadline")} 
          </p>
        </div>
      <div className='player-wrapper mb-5 rounded-2xl overflow-clip shadow-xl mt-16 w-full'>

      <ReactPlayer
              className='react-player'
              url='https://vimeo.com/905437180'
              width='100%'
              height='100%'
               controls='true'
            />
      </div>
   
      </div>
    </div>
  )
}
