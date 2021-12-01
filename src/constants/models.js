export const defaultBook = () => ({
    id: '',
    name: '',
    author: '',
    edition: '',
    editorial: '',
    inventory_total: 0,
    inventory: 0,
})


export const defaultPerson = () => ({
    id: '',
    name: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
})

export const defaultEmployee = () => ({
    id: '',
    person: defaultPerson(),
    username: '',
    password: '',
})

export const defaultCustomer = () => ({
    id: '',
    has_books: false,
    debt: 0,
    person: defaultPerson(),
})

export const defaultLoan = () => ({
    id: '',
    book_num: '',
    books: [],
    customer: defaultCustomer(),
    start_date: new Date().toISOString(),
    end_date: '',
    active: '',
    debt: 0,
})

export const defaultEmail = () => ({
    id: '',
    loan: defaultLoan(),
    send_date: '',
})

export const defaultReturn = () => ({
    id: '',
    loan: defaultLoan(),
    payment: '',
    date: '',
})