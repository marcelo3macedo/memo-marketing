import { Wrapper, Container, Picture } from "./styles"
import logo from '@assets/images/extended-logo.png'

const Loading = () => {
  return (
      <Wrapper>
        <Container>
          <Picture src={logo.src} />
        </Container>
      </Wrapper>
  )
}

export default Loading