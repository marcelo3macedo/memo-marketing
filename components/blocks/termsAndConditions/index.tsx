import Term from "@components/elements/term"
import { useTranslation } from "react-multi-lang"
import { Wrapper, Container, Title, Elements } from "./styles"

const BlockTermsAndConditions = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <Title>{t('terms.title')}</Title>

          <Elements>
            <Term title={t('terms.overview.title')} description={t('terms.overview.content')} />
            <Term title={t('terms.license.title')} description={t('terms.license.content')} />
            <Term title={t('terms.responsability.title')} description={t('terms.responsability.content')} />
            <Term title={t('terms.limitation.title')} description={t('terms.limitation.content')} />
            <Term title={t('terms.materials.title')} description={t('terms.materials.content')} />
            <Term title={t('terms.links.title')} description={t('terms.links.content')} />
            <Term title={t('terms.modification.title')} description={t('terms.modification.content')} />
            <Term title={t('terms.law.title')} description={t('terms.law.content')} />
          </Elements>
        </Container>
      </Wrapper>
  )
}

export default BlockTermsAndConditions