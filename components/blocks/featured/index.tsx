import womanThinking from "@assets/images/blocks/book-study.png"
import TextWithButton from "@components/elements/textWithButton"
import { Wrapper, Picture, Container } from "./styles"

const Featured = () => {
    return (
        <Wrapper>
          <Container>
            <TextWithButton />
            <Picture src={womanThinking.src} />
          </Container>
        </Wrapper>
    )
}

export default Featured