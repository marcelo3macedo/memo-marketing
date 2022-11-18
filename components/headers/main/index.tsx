import { useTranslation } from "react-multi-lang"
import Link from "next/link"
import ButtonPrimary from "@components/buttons/primary"
import LogoNamed from "@components/elements/logoNamed"
import LinkList from "@components/elements/linkList"
import { Container, Wrapper } from "./styles"

const Header = () => {
    const t = useTranslation()

    return (
        <Wrapper>
            <Container>
                <LogoNamed />
                <LinkList />
                <Link href="https://app.memorizou.com.br/signIn">
                    <ButtonPrimary content={t('menu.startNow')} />
                </Link>
            </Container>
        </Wrapper>
    )
}

export default Header