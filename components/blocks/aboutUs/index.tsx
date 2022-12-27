import TalkWithUs from "@components/elements/talkWithUs"
import { useTranslation } from "react-multi-lang"
import { Wrapper, Container, Title, Description, Action } from "./styles"

const AboutUs = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <Title>{t('blocks.aboutUs.title')}</Title>
          <Description>{t('blocks.aboutUs.description')}</Description>
          <Action>
            <TalkWithUs />
          </Action>
        </Container>
      </Wrapper>
  )
}

export default AboutUs