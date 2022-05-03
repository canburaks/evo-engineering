import Head from 'next/head';
import { Fragment } from 'react';
import HeaderTwo from '../components/header/header-2';
import GoogleMap from '../components/contact/google-map';
import ContactForm from '../components/contact/contact-form';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import nextI18NextConfig from "../../next-i18next.config"
import { useTranslation } from "next-i18next"

function ContactPage() {
    return (
        <Fragment>
            <Head>
                <title>Contact Us</title>
                <meta name='description' content='Send us your messages!' />
            </Head>
            <HeaderTwo />
            <GoogleMap />
            <ContactForm />
        </Fragment>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(
                locale,
                ["common", "pages"],
                nextI18NextConfig
            ))
        }
    }
}

export default ContactPage;
