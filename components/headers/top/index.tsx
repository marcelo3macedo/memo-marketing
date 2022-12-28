import Head from "next/head";
import { useTranslation } from 'react-multi-lang';

const HeaderTop = () => {
    const t = useTranslation()

    return (
        <Head>
            <title>{t('application.title')}</title>
            <link rel="icon" href="logo.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name='description' content={t('application.description')} />
            <meta property='og:title' content={t('application.title')} />
            <meta
                property='og:description'
                content={t('application.description')}
            />
            <meta property='og:url' content='https://www.memorizou.com.br/' />
            <meta property='og:type' content='website' />
        </Head>
    )
}

export default HeaderTop