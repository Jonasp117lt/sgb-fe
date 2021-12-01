import React, { useContext } from 'react'
import { Grid, Button } from '@mui/material'
import Card from "../../components/Card"
import TextField from "../../components/TextField"
import styled from "styled-components"
import { login } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../services/auth'
import * as swal from "../../utils/alerts"
import MainProvider from '../../context'

const LoginContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    & .MuiPaper-root{
        width: 300px
    }

    & .MuiCardContent-root{
        padding-bottom: 0 !important;
    }
`;

const LoginForm = () => {
    const navigate = useNavigate()
    const { setUpdate } = useContext(MainProvider)
    const [username, setUsername] = React.useState('root')
    const [password, setPassword] = React.useState('12345')

    const handleLogin = async () => {
        const response = await login(username, password)
        if (response.success) {
            setToken(response.token)
            navigate("/")
            setUpdate(Math.random())
        }
        else {
            swal.requestError("Ooops!", "Hubo un error al intentar iniciar sesión, inténtalo de nuevo")
        }
        console.log(response)
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField
                    label='Nombre de Usuario'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label='Contraseña'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
                <Button sx={{ p: 0 }} onClick={handleLogin}>Iniciar Sesión</Button>
            </Grid>

        </Grid>
    )
}

export const Login = () => {
    return (
        <LoginContainer>
            <Card
                title='Iniciar Sesión'
                content={<LoginForm />}
                divider
            />
        </LoginContainer>
    )
}