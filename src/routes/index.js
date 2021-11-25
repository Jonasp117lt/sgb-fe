import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Customers, CreateCustomer, UpdateCustomer, ReadCustomer } from './Customers'
import { Books, CreateBook, UpdateBook, ReadBook } from './Books'
import { Loans, CreateLoan, ReadLoan } from './Loans'
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
            </Routes>
        </MainContainer>
    )
}

export default AppRoutes