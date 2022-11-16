import { useTranslation } from "react-multi-lang"
import ButtonPrimary from "@components/buttons/primary"
import LogoNamed from "@components/elements/logoNamed"
import { Container, Wrapper } from "./styles"

const Header = () => {
    const t = useTranslation()

    return (
        <Wrapper>
            <Container>
                <LogoNamed />
                <ButtonPrimary content={t('menu.startNow')} />
            </Container>
        </Wrapper>
    )
}

export default Header