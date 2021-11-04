import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Customers from './Customers'
import Books from './Books'
import styled from 'styled-components'


const MainContainer = styled.div.attrs({ className: "MainContainer" })`
  margin-top: 76.88px;
  height: -webkit-fill-available;
  padding: 2rem;
  background-color: #EAEEF3;
`;


const AppRoutes = () => {
    return (
        <MainContainer>
            <Routes>
                <Route path={"books"} element={<Books />} />
                <Route path={"customers"} element={<Customers />} />
            </Routes>
        </MainContainer>
    )
}

export default AppRoutes