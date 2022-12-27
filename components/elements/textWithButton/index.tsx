import ButtonPrimary from '@components/buttons/primary';
import Link from 'next/link';
import { useTranslation } from 'react-multi-lang';
import { Wrapper, Title, SubTitle, Actions, TitleArea, Row, TitleFeatured } from "./styles";

const TextWithButton = () => {
    const t = useTranslation();

    return (
        <Wrapper>
            <TitleArea>
                <Row>
                    <Title>{t('blocks.featured.method')}</Title>
                    <TitleFeatured>{t('blocks.featured.numberOne')}</TitleFeatured>
                </Row>
                <Row>
                    <Title>{t('blocks.featured.yourStudies')}</Title>
                </Row>
            </TitleArea>
            
            <SubTitle>{t('blocks.featured.subTitle')}</SubTitle>
            
            <Actions>
                <Link href="/howWorks">
                    <ButtonPrimary content={t('blocks.featured.howWorks')} />
                </Link>
            </Actions>
        </Wrapper>
    )
}

export default TextWithButton