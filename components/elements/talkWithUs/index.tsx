import ButtonSecondary from "@components/buttons/secondary"
import { useTranslation } from "react-multi-lang"
import Link from "next/link"
import { Wrapper, Container, Title, Action } from "./styles"

const TalkWithUs = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <Title>{t('blocks.talkWithUs.title')}</Title>
          <Action>
            <Link href={'/contactUs'}>
              <ButtonSecondary content={t('blocks.talkWithUs.action')} /> 
            </Link>
          </Action>
        </Container>
      </Wrapper>
  )
}

export default TalkWithUs