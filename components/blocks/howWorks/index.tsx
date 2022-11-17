import question from "@assets/images/blocks/question.png"
import retetionGap from "@assets/images/blocks/retetionGap.png"
import OptionsList from "@components/elements/optionsList"
import { useTranslation } from "react-multi-lang"
import { Wrapper, Container, Picture, Title, PictureFull } from "./styles"

const BlockHowWorks = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Title>{t('blocks.howWorks.title')}</Title>          
        <Container>
          <OptionsList />
          <Picture src={question.src} />          
        </Container>
        <PictureFull src={retetionGap.src} /> 
      </Wrapper>
  )
}

export default BlockHowWorks