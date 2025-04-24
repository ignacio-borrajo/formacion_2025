import React from "react"
import {Box} from "@mui/material"
import {Outlet} from "react-router-dom" 
import Header from "./Header"

function Layout(){
    
    return <Box>
        <Header></Header>
        <Outlet/>
    </Box>

}

export default Layout