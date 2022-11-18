import ButtonPrimary from "@components/buttons/primary"
import Policy from "@components/elements/policy"
import Link from "next/link"
import { useTranslation } from "react-multi-lang"
import { Wrapper, Container, Title, Description, SubTitle, Action } from "./styles"

const BlockContactUs = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <Title>{t('contactUs.title')}</Title>
          <Description>{t('contactUs.description')}</Description>
          <SubTitle>{t('contactUs.mail')}</SubTitle>
          <Action>
            <Description>{t('contactUs.whatsapp')}</Description>
            <Link href="https://wa.me/5514997764993?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20com%20a%20plataforma%20Memorizou">
              <ButtonPrimary content={t('contactUs.whats')} />
            </Link>
          </Action>
        </Container>
      </Wrapper>
  )
}

export default BlockContactUs