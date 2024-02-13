import Image from 'next/image'
import integrations from '../public/Images/integrations.svg'
import { useTranslations } from 'next-intl'
import { Container } from './Container'
import { SectionIntro } from './SectionIntro'

export function Integrations() {
  const t = useTranslations('integrations')

  return (
    <section id="integrations">
      <SectionIntro title={t('headline')} className="mt-40 sm:mt-32 lg:mt-64 ">
        <p>{t('subheadline')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <Image width={1250} height={540} src={integrations} alt="Integrations" />
      </Container>
    </section>
  )
}
