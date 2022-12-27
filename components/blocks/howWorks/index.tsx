import question from "@assets/images/blocks/question.png"
import retetionGap from "@assets/images/blocks/retetionGap.png"
import OptionsList from "@components/elements/optionsList"
import { useTranslation } from "react-multi-lang"
import { Wrapper, Container, Picture, Title, PictureFull, Main, SubTitle } from "./styles"

const HowWorks = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Main>
          <Title>{t('blocks.howWorks.title')}</Title>
          <SubTitle>{t('blocks.howWorks.subTitle')}</SubTitle>
        </Main>
        <Container>
          <OptionsList />
        </Container>
        <PictureFull src={retetionGap.src} /> 
      </Wrapper>
  )
}

export default HowWorks