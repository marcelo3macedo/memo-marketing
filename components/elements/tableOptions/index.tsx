import ButtonPrimary from '@components/buttons/primary'
import IconMedium from '@components/icons/IconMedium'
import Link from 'next/link'
import { useTranslation } from 'react-multi-lang'
import { Wrapper, Container, Header, Body, Description, Option, Item, Footer, Action } from "./styles"

const TableOptions = () => {
    const t = useTranslation()
    
    return (
        <Wrapper>
            <Container>
                <Header>
                    <Description></Description>
                    <Option>{t('blocks.ourPlans.standard')}</Option>
                    <Option>{t('blocks.ourPlans.pro')}</Option>
                </Header>
                <Body>
                    <Item>
                        <Description>{t('blocks.ourPlans.simultaneos')}</Description>
                        <Option>10</Option>
                        <Option>Ilimitado</Option>
                    </Item>
                    <Item>
                        <Description>{t('blocks.ourPlans.cardsPerSession')}</Description>
                        <Option>100</Option>
                        <Option>Ilimitado</Option>
                    </Item>
                    <Item>
                        <Description>{t('blocks.ourPlans.ads')}</Description>
                        <Option><IconMedium name="close" /></Option>
                        <Option><IconMedium name="ok" /></Option>
                    </Item>
                    <Item>
                        <Description>{t('blocks.ourPlans.integration')}</Description>
                        <Option><IconMedium name="close" /></Option>
                        <Option><IconMedium name="ok" /></Option>
                    </Item>
                    <Item>
                        <Description>{t('blocks.ourPlans.evolution')}</Description>
                        <Option><IconMedium name="close" /></Option>
                        <Option><IconMedium name="ok" /></Option>
                    </Item>
                </Body>
                    
                <Footer>
                    <Item>
                        <Description></Description>
                        <Option>
                            <Action>
                                <Link href={`${process.env.NEXT_PUBLIC_APP_ENDPOINT}/plans`}>
                                    <ButtonPrimary content={t('blocks.ourPlans.action.free')} />
                                </Link>
                            </Action>
                        </Option>
                        <Option>
                            <Action>
                                <Link href={`${process.env.NEXT_PUBLIC_APP_ENDPOINT}/plans/Mensal`}>
                                    <ButtonPrimary content={t('blocks.ourPlans.action.proMonth')} />
                                </Link>
                            </Action>
                            <Action>
                                <Link href={`${process.env.NEXT_PUBLIC_APP_ENDPOINT}/plans/Trimestral`}>
                                    <ButtonPrimary content={t('blocks.ourPlans.action.proTri')} />
                                </Link>
                            </Action>
                        </Option>
                    </Item>
                </Footer>
            </Container>
        </Wrapper>
    )
}

export default TableOptions