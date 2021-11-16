export const defaultBook = () => ({
    id: '',
    name: '',
    author: '',
    edition: '',
    editorial: '',
    inventory: '',
})

export const defaultEmployee = () => ({
    id: '',
    person_id: '',
    username: '',
    password: '',
})

export const defaultPerson = () => ({
    id: '',
    name: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
})

export const defaultCustomer = () => ({
    id: '',
    has_books: false,
    debt: 0,
    person: defaultPerson(),
})

export const defaultEmail = () => ({
    id: '',
    loan_id: '',
    send_date: '',
})

export const defaultLoan = () => ({
    id: '',
    book_num: '',
    book_ids: '',
    customer_id: '',
    start_date: '',
    end_date: '',
    debt: '',
})

export const defaultReturn = () => ({
    id: '',
    loan_id: '',
    book_num: '',
    book_ids: '',
    payment: '',
    date: '',
})