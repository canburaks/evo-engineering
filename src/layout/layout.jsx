import React, { Fragment } from "react"
import { MyNavigationMenu } from "./navigation"
import Footer from "./footer"

export const Layout = ({ children }) => (
    <Fragment>
        <MyNavigationMenu />
        {children}
        <Footer />
    </Fragment>
)
