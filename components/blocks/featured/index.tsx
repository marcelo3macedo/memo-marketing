import womanThinking from "@assets/images/blocks/womanThinking.png"
import TextWithButton from "@components/elements/textWithButton"
import { Wrapper, Picture, Container } from "./styles"

const BlockFeatured = () => {
    return (
        <Wrapper>
          <Container>
            <TextWithButton />
            <Picture src={womanThinking.src} />
          </Container>
        </Wrapper>
    )
}

export default BlockFeatured