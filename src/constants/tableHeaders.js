export const bookHeaders = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: '#',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nombre',
    },
    {
        id: 'author',
        numeric: false,
        disablePadding: true,
        label: 'Autor',
    },
    {
        id: 'edition',
        numeric: false,
        disablePadding: true,
        label: 'Edición',
    },
    {
        id: 'editorial',
        numeric: false,
        disablePadding: true,
        label: 'Editorial',
    },
    {
        id: 'inventory',
        numeric: true,
        disablePadding: true,
        label: 'Inventario disponible',
    },
    {
        id: 'inventory_total',
        numeric: true,
        disablePadding: true,
        label: 'Inventario total',
    },
]

export const customerHeaders = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: '#',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nombre',
    },
    {
        id: 'has_books',
        numeric: false,
        disablePadding: true,
        label: 'Tiene libros',
    },
    {
        id: 'debt',
        numeric: false,
        disablePadding: true,
        label: 'Adeudo',
    },
]

export const loanHeaders = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: '#',
    },
    {
        id: 'customer_name',
        numeric: false,
        disablePadding: true,
        label: 'Cliente',
    },
    {
        id: 'start_date',
        numeric: false,
        disablePadding: true,
        label: 'Fecha de préstamo',
    },
    {
        id: 'end_date',
        numeric: false,
        disablePadding: true,
        label: 'Fecha límite de entrega',
    },
    {
        id: 'book_num',
        numeric: false,
        disablePadding: true,
        label: 'No. de Libros',
    },
    {
        id: 'debt',
        numeric: false,
        disablePadding: true,
        label: 'Adeudo',
    },
]