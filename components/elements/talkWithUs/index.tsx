import ButtonSecondary from "@components/buttons/secondary"
import { useTranslation } from "react-multi-lang"
import { Wrapper, Container, Title, Action } from "./styles"

const TalkWithUs = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <Title>{t('blocks.talkWithUs.title')}</Title>
          <Action>
            <ButtonSecondary content={t('blocks.talkWithUs.action')} /> 
          </Action>
        </Container>
      </Wrapper>
  )
}

export default TalkWithUs