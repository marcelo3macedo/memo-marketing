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
                <Link href={`${process.env.NEXT_PUBLIC_APP_ENDPOINT}/signIn`}>
                    <ButtonPrimary content={t('blocks.featured.startNow')} />
                </Link>
            </Actions>
        </Wrapper>
    )
}

export default TextWithButton