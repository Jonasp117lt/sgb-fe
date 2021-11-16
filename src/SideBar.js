import React, { useContext } from 'react'
import styled from 'styled-components'
import { Drawer as UnstyledDrawer, List, ListItem, ListItemText } from '@mui/material'
import MainProvider from './context'
import { Link } from 'react-router-dom'

const Drawer = styled(UnstyledDrawer)`
    & .css-1160xiw-MuiPaper-root-MuiDrawer-paper{
        background-color: #363636;
        width: 200px;
    }
    span{
        :hover{
            color: white;
        }
        color: #FFFFFF4D;
    }
`;

const links = [
    {
        name: 'Libros',
        path: '/books',
    },
    {
        name: 'Clientes',
        path: '/customers',
    },
]

const SideBar = () => {
    const { openSideBar, setOpenSideBar } = useContext(MainProvider)
    return <div>
        <Drawer type='permanent' anchor='right' open={openSideBar} onClose={() => setOpenSideBar(false)}>
            <List>
                {links.map((link, index) => {
                    return (
                        <ListItem component={Link} to={link.path} key={`key-${index + 1}`}>
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