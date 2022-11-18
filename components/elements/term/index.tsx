import { Wrapper, Container, Title, Description } from "./styles"

const Term = ({ title, description }) => {
  const multiline = description.split("\n")

  return (
      <Wrapper>
        <Container>
          <Title>{title}</Title>
          { multiline.map(line => (
            <Description>{line}</Description>
          )) }          
        </Container>
      </Wrapper>
  )
}

export default Term