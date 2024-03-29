import Document, { Html, Head, Main, NextScript } from "next/document"
import { getCssText } from "../styles/stitches.config"

class MyDocument extends Document {
    render() {
        return (
            <Html className="scroll-smooth">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="google-site-verification"
                        content="mZbo9OFGArUD5WQF_Rd76UH0UpffddNUn1rVpRahhRM"
                    />
                    <meta
                        name="keywords"
                        content="electrical cars, ev engine, ev car."
                    />
                    <meta name="author" content="" />
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/img/_evo/favicon/apple-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="/img/_evo/favicon/apple-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/img/_evo/favicon/apple-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/img/_evo/favicon/apple-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/img/_evo/favicon/apple-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/img/_evo/favicon/apple-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/img/_evo/favicon/apple-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/img/_evo/favicon/apple-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/img/_evo/favicon/apple-icon-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="/img/_evo/favicon/android-icon-192x192.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/img/_evo/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href="/img/_evo/favicon/favicon-96x96.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/img/_evo/favicon/favicon-16x16.png"
                    />
                    <link
                        rel="manifest"
                        href="/img/_evo/favicon/manifest.json"
                    />
                    <style
                        id="stitches"
                        dangerouslySetInnerHTML={{ __html: getCssText() }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `
                                {
                                "@context": "https://schema.org",
                                "@type": "Corporation",
                                "@id": "https://evo-e.com",
                                "url": "https://evo-e.com/",
                                "name": "EVO Engineering GmbH",
                                "email": "info@evo-e.com",
                                "ethicsPolicy": "https://evo-e.com/en/about-us/compliance/",
                                "faxNumber": "+498937458132",
                                "keywords": [],
                                "legalName": "EVO Engineering GmbH",
                                "address": "Frankfurter Ring 105, 80807 München",
                                "alternateName": "EVO-E",
                                "image": "https://evo-e.com/img/_evo/evo-e-logo.webp",
                                "logo": "https://evo-e.com/img/_evo/evo-e-logo.webp",
                                "sameAs": [
                                    "https://www.evo-e.com",
                                    "https://www.linkedin.com/company/evo-engineering-gmbh/"
                                ],
                                "slogan": "Next generation electrification",
                                "telephone": "+4917612901260",
                                "knowsLanguage": [
                                    "de",
                                    "en"
                                ],
                                "location": "https://g.page/r/CV0ieMmPdSSiEBA"
                            }`
                        }}
                    ></script>
                </Head>
                <body className="font-inter relative">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
