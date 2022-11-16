import ButtonSecondary from '@components/buttons/secondary'
import { useTranslation } from 'react-multi-lang'
import { Wrapper, Title, SubTitle, Actions } from "./styles"

const TextWithButton = () => {
    const t = useTranslation()

    return (
        <Wrapper>
            <SubTitle>{t('blocks.featured.welcome')}</SubTitle>
            <Title>{t('blocks.featured.title')}</Title>
            <SubTitle>{t('blocks.featured.subTitle')}</SubTitle>
            
            <Actions>
                <ButtonSecondary content={t('blocks.featured.howWorks')} />
            </Actions>
        </Wrapper>
    )
}

export default TextWithButton