import { useTranslation } from "react-multi-lang"
import Link from 'next/link'
import logo from '@assets/images/logoSmall.png'
import { Container, Wrapper, Picture, Info, Title, Item, Copyright, Message } from "./styles"
import ButtonText from "@components/buttons/text"

const Footer = () => {
    const t = useTranslation()

    return (
        <Wrapper>
            <Container>
                <Picture src={logo.src} />
                <Info>
                    <Title>{t('footer.company')}</Title>
                    <Item>
                        <Link href="/contactUs">
                            <ButtonText content= {t('footer.talkWithUs')} />
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/privacyPolicy">
                            <ButtonText content= {t('footer.privacyPolicy')} />
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/termsAndConditions">
                            <ButtonText content= {t('footer.termsAndConditions')} />
                        </Link>
                    </Item>
                    <Item>
                        <Link href={`${process.env.NEXT_PUBLIC_APP_ENDPOINT}/signIn`}>
                            <ButtonText content= {t('footer.signUp')} />
                        </Link>
                    </Item>
                </Info>
                <Info>
                    <Title>{t('footer.attendence')}</Title>
                    <Item>{t('footer.whatsapp')}</Item>
                    <Item>{t('footer.mail')}</Item>
                    <Item>{t('footer.workingTime')}</Item>
                </Info>
            </Container>
            <Copyright>
                <Message>{t('footer.copyright')}</Message>
            </Copyright>
        </Wrapper>
    )
}

export default Footer