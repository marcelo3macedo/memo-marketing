import Policy from "@components/elements/policy"
import Term from "@components/elements/term"
import { useTranslation } from "react-multi-lang"
import { Wrapper, Container, Title, Elements } from "./styles"

const BlockPrivacyPolicy = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <Title>{t('privacyPolicy.title')}</Title>

          <Elements>
            <Policy title={t('privacyPolicy.overview.title')} description={t('privacyPolicy.overview.content')} />
            <Policy title={t('privacyPolicy.user.title')} description={t('privacyPolicy.user.content')} />
            <Policy title={t('privacyPolicy.moreInfo.title')} description={t('privacyPolicy.moreInfo.content')} />
          </Elements>
        </Container>
      </Wrapper>
  )
}

export default BlockPrivacyPolicy