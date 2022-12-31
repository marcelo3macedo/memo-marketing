import { Wrapper, Container, Title, Description } from "./styles"

const Policy = ({ title, description }) => {
  const multiline = description.split("\n")

  return (
      <Wrapper>
        <Container>
          <Title>{title}</Title>
          { multiline.map((line, i) => (
            <Description key={i}>{line}</Description>
          )) }          
        </Container>
      </Wrapper>
  )
}

export default Policy