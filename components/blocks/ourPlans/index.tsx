import TableOptions from "@components/elements/tableOptions"
import { useTranslation } from "react-multi-lang"
import { Wrapper, Container, Title } from "./styles"

const BlockOurPlans = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <Title>{t('blocks.ourPlans.title')}</Title>
          <TableOptions />
        </Container>
      </Wrapper>
  )
}

export default BlockOurPlans