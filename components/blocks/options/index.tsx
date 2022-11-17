import books from "@assets/images/blocks/books.png"
import TextWithList from "@components/elements/textWithList"
import { Wrapper, Container, Picture } from "./styles"

const BlockOptions = () => {
    return (
        <Wrapper>
          <Container>
            <Picture src={books.src} />
            <TextWithList />
          </Container>
        </Wrapper>
    )
}

export default BlockOptions