import { getToken } from "./auth"
import axios from 'axios'

// const apiRoute = "https://api.moloch.developmers.com"
const apiRoute = "http://localhost:8080"

export const fetchDataRequest = async (route, method = "get", data) => {
    const token = getToken()
    return await axios[method.toLowerCase()](
        `${apiRoute}/${route}`,
        {
            ...data,
            headers: { 'Authorization': `Bearer ${token}` }
        },
        { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => { return response.data })
        .catch(error => {
            if (error.response) {
                return { message: error.message }
            }
            else {
                return error
            }
        })
}

export const login = async (username, password) => {
    return await fetchDataRequest("auth", "POST", { username, password })
}

export const getBooks = async () => await fetchDataRequest("api/books")
export const getBook = async (id) => await fetchDataRequest(`api/books/${id}`)
export const createBook = async (book) => await fetchDataRequest(`api/books`, "POST", book)
export const updateBook = async (book) => await fetchDataRequest(`api/books/${book.id}`, "PUT", book)
export const deleteBook = async (id) => await fetchDataRequest(`api/books/${id}`, "DELETE")

export const createCustomer = async (customer) => await fetchDataRequest(`api/customers`, "POST", customer)
export const getCustomers = async () => await fetchDataRequest(`api/customers`)
export const getCustomer = async (id) => await fetchDataRequest(`api/customers/${id}`)
export const updateCustomer = async (customer) => await fetchDataRequest(`api/customers/${customer.id}`, "PUT", customer)
export const deleteCustomer = async (id) => await fetchDataRequest(`api/customers/${id}`, "DELETE")

export const createEmployee = async (employee) => await fetchDataRequest(`api/employees`, "POST", employee)
export const getEmployees = async () => await fetchDataRequest(`api/employees`)
export const getEmployee = async (id) => await fetchDataRequest(`api/employees/${id}`)
export const updateEmployee = async (employee) => await fetchDataRequest(`api/employees/${employee.id}`, "PUT", employee)
export const deleteEmployee = async (id) => await fetchDataRequest(`api/employees/${id}`, "DELETE")

export const createLoan = async (loan, customerId) => await fetchDataRequest(`api/loans/${customerId}`, "POST", loan)
export const getLoans = async (customerId) => await fetchDataRequest(`api/loans${customerId ? `?customerId=${customerId || ""}` : ""}`)
export const getLoan = async (id) => await fetchDataRequest(`api/loans/${id}`)

export const createReturn = async (_return, loanId) => await fetchDataRequest(`api/returns/${loanId}`, "POST", _return)
export const getReturnsByCustomer = async (customerId) => await fetchDataRequest(`api/returns/${customerId}`)

export default {
    getReturnsByCustomer,
    createReturn,
    getLoan,
    getLoans,
    createLoan,
    deleteEmployee,
    updateEmployee,
    getEmployee,
    getEmployees,
    createEmployee,
    deleteCustomer,
    updateCustomer,
    getCustomer,
    getCustomers,
    createCustomer,
    deleteBook,
    updateBook,
    createBook,
    getBook,
    getBooks,
}
