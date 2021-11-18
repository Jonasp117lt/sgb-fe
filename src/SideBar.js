import React, { useContext } from 'react'
import styled from 'styled-components'
import { Drawer as UnstyledDrawer, List, ListItem, ListItemText, Divider } from '@mui/material'
import MainProvider from './context'
import { Link, useLocation } from 'react-router-dom'
import CustomerIcon from '@mui/icons-material/Person';
import BooksIcon from '@mui/icons-material/LibraryBooks';
import LoanIcon from '@mui/icons-material/LocalLibrary';

const Drawer = styled(UnstyledDrawer)`
    & .css-4t3x6l-MuiPaper-root-MuiDrawer-paper{
        background-color: #363636;
        width: 200px;
        padding-top: 76.88px;
    }
    hr{
        border-color: #FFFFFF4D;
    }
    a{
        :not(.active):hover{
            color: white;
            background-color: #1976d222;
        }
        color: #FFFFFF4D;
        border-end-end-radius: 20px;
        border-start-end-radius: 20px;
    }
    .active{
        background-color: #1976d2;
        color: white;
    }
`;

const links = [
    {
        name: 'Libros',
        path: 'books',
        icon: BooksIcon,
    },
    {
        name: 'Clientes',
        path: 'customers',
        icon: CustomerIcon,
    },
    {
        name: 'Préstamos',
        path: 'loans',
        icon: LoanIcon,
    },
]

const SideBar = () => {
    const location = useLocation()
    const activePath = location.pathname.split('/')[1]
    const { openSideBar, setOpenSideBar } = useContext(MainProvider)
    return <div>
        <Drawer type='permanent' anchor='left' open={openSideBar} onClose={() => setOpenSideBar(false)}>
            <Divider />
            <List>
                {links.map((link, index) => {
                    const Icon = link.icon
                    return (
                        <ListItem component={Link} to={`/${link.path}`} key={`key-${index + 1}`} className={activePath === link.path ? 'active' : ''}>
                            <Icon sx={{ mr: 2 }} />
                            <ListItemText>
                                {link.name}
                            </ListItemText>
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    </div>
}



export default SideBar