import React, { Fragment } from "react"
import { MyNavigationMenu } from "./navigation"
import Footer from "./footer"

export const Layout = ({ children }) => (
    <Fragment>
        <MyNavigationMenu />
        <main className="pt-[94px]" id="main">{children}</main>
        <Footer />
    </Fragment>
)
