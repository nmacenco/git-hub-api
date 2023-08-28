import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "@mui/material";


export const RouterLayout : React.FC<{}> = () => {
    return (
        <>
            <Header/>
            <Container
                maxWidth="sm"
                sx={{
                    marginTop: '90px', 
                }}
            >
                        <Outlet />
            </Container>
        </>
    )
}