import { AppBar, Toolbar, IconButton } from "@mui/material";
import React from "react";
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import MainProvider from './context'
import { getToken } from "./services/auth"

const LogoText = styled.h1`
    font-family: 'Squada One', cursive;
    user-select: none;
    cursor: default;
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
    cursor: default;
    font-weight: normal;
`;


const HeaderContent = ({ toggle }) => {
    const token = getToken()
    return <Toolbar>
        {token && <IconButton
            onClick={toggle}
            edge='end'
            color='inherit'
            aria-label='menu'
            size='large'
            sx={{ marginRight: '10px' }}
        >
            <MenuIcon />
        </IconButton>
        }
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <HeaderTitle>Sistema de Gestión de Biblioteca</HeaderTitle>
    </Toolbar>;
}


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