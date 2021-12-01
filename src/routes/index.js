import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Customers, CreateCustomer, UpdateCustomer, ReadCustomer } from './Customers'
import { Books, CreateBook, UpdateBook, ReadBook } from './Books'
import { Loans, CreateLoan, ReadLoan } from './Loans'
import { CreateReturn } from './Returns'
import { Login } from "./Login"
import { getToken } from '../services/auth'


const MainContainer = styled.div.attrs({ className: "MainContainer" })`
  margin-top: 76.88px;
  height: auto;
  min-height: -webkit-fill-available;
  padding: 2rem;
  background-color: #EAEEF3;
`;


const AppRoutes = () => {
    const token = getToken()
    const location = useLocation()
    const navigate = useNavigate()
    const redirectRoute = token ? "books" : "login"
    
    React.useEffect(() => {
        if (location.pathname === "/") {
            navigate(`/${redirectRoute}`)
        }
    }, [location.pathname])

    return (
        <MainContainer>
            <Routes>
                {token ? <>
                    <Route path={"books"} element={<Books />} />
                    <Route path={"books/create"} element={<CreateBook />} />
                    <Route path={"books/:bookId/update"} element={<UpdateBook />} />
                    <Route path={"books/:bookId"} element={<ReadBook />} />
                    <Route path={"customers"} element={<Customers />} />
                    <Route path={"customers/create"} element={<CreateCustomer />} />
                    <Route path={"customers/:customerId/update"} element={<UpdateCustomer />} />
                    <Route path={"customers/:customerId"} element={<ReadCustomer />} />
                    <Route path={"loans"} element={<Loans />} />
                    <Route path={"loans/create/:customerId"} element={<CreateLoan />} />
                    <Route path={"loans/:loanId"} element={<ReadLoan />} />
                    <Route path={"loans/:loanId/return"} element={<CreateReturn />} />
                </> :
                    <>
                        <Route path={"login"} element={<Login />} />
                    </>}
            </Routes>
        </MainContainer>
    )
}

export default AppRoutes