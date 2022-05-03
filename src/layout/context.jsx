/* eslint-disable @next/next/no-css-tags */
import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import * as Settings from "../settings"


// const getGlobalSettings = (lang) => {
//     const globals = Settings.global
//     const translations = Settings.tranlations[Settings.global.lang]
//     console.log("globals", globals)
//     return {
//         ...translations,
//         ...globals
//     }
// }
const site = new Settings.Site()
export const TranslationContext = React.createContext(site.data)

const TranslationContextProvider = ({ children }) => {
    const [lang, setLang] = React.useState(undefined)
    const siteData = new Settings.Site(lang)

    React.useEffect(() => {
        const pageLang = document?.documentElement?.lang
        if (pageLang) {
            setLang(pageLang)
        }
    }, [])
    return (
        <TranslationContext.Provider value={siteData.data}>
            {children}
        </TranslationContext.Provider>
    )
}
export const ContextLayout = ({ children }) => (
    <TranslationContextProvider>{children}</TranslationContextProvider>
)

export default ContextLayout
