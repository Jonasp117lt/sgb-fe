const createBook = (id, name, author, edition, editorial, inventory_total) => ({
    id,
    name,
    author,
    edition,
    editorial,
    inventory_total,
    inventory: inventory_total,
})

export const single_book = createBook('1', 'Harry Potter', 'J.K. Rowling', '3', 'Salamandra', 5)

export const books = [
    createBook('1', 'Harry Potter y la Piedra Filosofal', 'J.K. Rowling', '3', 'Salamandra', 5),
    createBook('2', 'Harry Potter y la Cámara de los Secretos', 'J.K. Rowling', '1', 'Salamandra', 3),
    createBook('3', 'Harry Potter y el Prisionero de Azkabán', 'J.K. Rowling', '2', 'Salamandra', 7),
    createBook('4', 'Harry Potter y el Caliz de Fuego', 'J.K. Rowling', '4', 'Salamandra', 3),
    createBook('5', 'Harry Potter y la Orden del Fénix', 'J.K. Rowling', '8', 'Salamandra', 1),
    createBook('6', 'Harry Potter y el Príncipe Mestizo', 'J.K. Rowling', '2', 'Salamandra', 9),
    createBook('7', 'Harry Potter y las Reliquias de la muerte', 'J.K. Rowling', '5', 'Salamandra', 3),
]

export const select_books = books.map(({ id, name }) => ({ id, label: name }))

const createPerson = (id, name, lastname, email, phone, address) => ({
    id,
    name,
    lastname,
    email,
    phone,
    address,
})

export const single_person = createPerson('1', 'Juan', 'Lopez', 'juan.lopez@gmail.com', '33345675', 'Etzatlán 204')

export const persons = [
    createPerson('1', 'Juan', 'Lopez', 'juan.lopez@gmail.com', '3334567325', 'Etzatlán 204'),
    createPerson('2', 'Pedro', 'Perez', 'pedro.perez@hotmail.com', '4367354635', 'Lopez 607'),
    createPerson('3', 'María', 'Jimenez', 'maria.jimenez@gmail.com', '4869705748', 'Higos 4355'),
    createPerson('4', 'Ricardo', 'Perez', 'ricardo.perez@gmail.com', '5968285968', 'Cotorro 3452'),
    createPerson('5', 'Jose', 'Slobotzky', 'jose.slobo@gmail.com', '6924562384', 'Mame 4523'),
    createPerson('6', 'Ricardo', "O'Farril", 'ricardo.farril@gmail.com', '3345968294', 'Hostia 233'),
    createPerson('7', 'Dahyun', 'Kim', 'kim.dahyun@naver.com', '3358697058', 'Itaewon 3333'),
    createPerson('8', 'Lluvia', 'Madriz', 'lluvia.madriz@hotmail.com', '3354567586', 'Sebastian 3623'),
    createPerson('9', 'David', 'Saldaña', 'david.saldaña@gmail.com', '3354785478', 'Tonala 3053'),
    createPerson('10', 'Fernando', 'Martinez', 'fernando.martinez@gmail.com', '33456743256', 'Micho 0394'),
]

const createCustomer = (id, person, debt, has_books) => ({
    id,
    person,
    debt,
    has_books,
})

export const single_customer = createCustomer('1', single_person, 50, 'si')

export const customers = [
    createCustomer('1', persons[0], 50, true),
    createCustomer('2', persons[1], 60, false),
    createCustomer('3', persons[2], 20, true),
    createCustomer('4', persons[3], 40, true),
    createCustomer('5', persons[4], 60, false),
    createCustomer('6', persons[5], 20, true),
    createCustomer('7', persons[6], 50, false),
    createCustomer('8', persons[7], 70, false),
    createCustomer('9', persons[8], 10, true),
    createCustomer('10', persons[9], 30, true),
]

const createLoan = (id, book_num, books, customer, start_date, end_date, active, debt) => ({
    id,
    book_num,
    books,
    customer,
    start_date,
    end_date,
    active,
    debt,
})

export const single_loan = createLoan('1', 3, [books[0], books[1], books[2]], single_customer, '2021-11-17T05:04:37.520Z', '2021-11-17T05:04:37.520Z', true, 20)

export const loans = [
    createLoan('1', 3, [books[0], books[1], books[2]], customers[0], '2021-11-17T05:04:37.520Z', '2021-11-19T05:04:37.520Z', true, 20),
    createLoan('2', 4, [books[1], books[2], books[3]], customers[1], '2021-11-17T05:04:37.520Z', '2021-11-19T05:04:37.520Z', true, 15),
    createLoan('3', 5, [books[0], books[1], books[2], books[3], books[4]], customers[2], '2021-11-17T05:04:37.520Z', '2021-11-19T05:04:37.520Z', true, 40),
    createLoan('4', 2, [books[3], books[4]], customers[3], '2021-11-17T05:04:37.520Z', '2021-11-19T05:04:37.520Z', true, 50),
]

const createReturn = (id, loan, book_num, books, payment, date) => ({
    id,
    loan,
    book_num,
    books,
    payment,
    date,
})

export const single_return = createReturn('1', single_loan, 3, [books[0], books[1], books[2]], 20, '2021-11-17T05:04:37.520Z')

export const returns = [
    createReturn('1', single_loan, 3, [books[0], books[1], books[2]], 20, '2021-11-17T05:04:37.520Z'),
    createReturn('2', single_loan, 3, [books[1], books[2], books[3]], customers[1], 20, '2021-11-17T05:04:37.520Z'),
    createReturn('3', single_loan, 3, [books[0], books[1], books[2], books[3], books[4], customers[2]], 20, '2021-11-17T05:04:37.520Z'),
    createReturn('4', single_loan, 3, [books[3], books[4]], customers[3], 20, '2021-11-17T05:04:37.520Z'),
]

