import React from "react"
import Head from "./components/header/Head"
import Foot from "./components/footer/Foot"
import Home from "./components/Home/home"
import { Outlet } from "react-router-dom"

function Layout(){
    return (
        <>
            <Head></Head>
            <Home></Home>
            <Foot></Foot>
        </>
    )

}

export default Layout