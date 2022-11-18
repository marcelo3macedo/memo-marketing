import { useTranslation } from "react-multi-lang"
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
                    <Item><ButtonText content= {t('footer.talkWithUs')} /></Item>
                    <Item><ButtonText content= {t('footer.privacyPolicy')} /></Item>
                    <Item><ButtonText content= {t('footer.termsAndConditions')} /></Item>
                    <Item><ButtonText content= {t('footer.signUp')} /></Item>
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