import { AppBar, Toolbar, IconButton } from "@mui/material";
import React from "react";
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import MainProvider from './context'

const LogoText = styled.h1`
    font-family: 'Squada One', cursive;
`;

export const Logo = () =>
    <LogoText>
        SGB
    </LogoText>

const LogoContainer = styled.div`
    margin-right: 20px;
`;

const HeaderTitle = styled.h2`
    font-size: 20px;
    font-weight: normal;
`;


const HeaderContent = ({ toggle }) =>
    <Toolbar>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <HeaderTitle>Sistema de Gestión de Biblioteca</HeaderTitle>
        <IconButton
            onClick={toggle}
            edge='end'
            color='inherit'
            aria-label='menu'
            size='large'
            sx={{ marginLeft: 'auto' }}
        >
            <MenuIcon />
        </IconButton>
    </Toolbar>;


const Header = () => {
    const { openSideBar, setOpenSideBar } = React.useContext(MainProvider)

    const toggleSideBar = () => {
        setOpenSideBar(!openSideBar)
    }

    return (
        <AppBar><HeaderContent toggle={toggleSideBar} /></AppBar>
    );
}

export default Header