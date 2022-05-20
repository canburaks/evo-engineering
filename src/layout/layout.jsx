import React, { Fragment } from "react"
import { MyNavigationMenu } from "./navigation"
import Footer from "./footer"

export const Layout = ({ children }) => (
    <Fragment>
        <MyNavigationMenu />
        <main className="pt-[100px]" id="main">{children}</main>
        <Footer />
    </Fragment>
)
