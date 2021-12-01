import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MoreVert';
import { visuallyHidden } from '@mui/utils';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ViewIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReturnIcon from '@mui/icons-material/SettingsBackupRestore';
import LoanIcon from '@mui/icons-material/LocalLibrary';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from 'react-router-dom'

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort, headCells, options } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {/* <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell> */}
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                {Object.values(options).includes(true) && <TableCell
                    align={'right'}
                    padding={'none'}
                    sortDirection={false}
                >
                    Acciones
                </TableCell>}
            </TableRow>
        </TableHead>
    );
}

// const EnhancedTableToolbar = (props) => {
//     const { numSelected, title } = props;

//     return (
//         <Toolbar
//             sx={{
//                 pl: { sm: 0 },
//                 pr: { xs: 1, sm: 1 },
//                 ...(numSelected > 0 && {
//                     bgcolor: (theme) =>
//                         alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//                 }),
//             }}
//         >
//             {numSelected > 0 ? (
//                 <Typography
//                     sx={{ flex: '1 1 100%' }}
//                     color="inherit"
//                     variant="subtitle1"
//                     component="div"
//                 >
//                     {numSelected} seleccionado(s)
//                 </Typography>
//             ) : (
//                 <Typography
//                     sx={{ flex: '1 1 100%' }}
//                     variant="h6"
//                     id="tableTitle"
//                     component="div"
//                 >
//                     {title}
//                 </Typography>
//             )}

//             {/* {numSelected > 0 ? (
//                 <Tooltip title="Delete">
//                     <IconButton>
//                         <DeleteIcon />
//                     </IconButton>
//                 </Tooltip>
//             ) : (
//                 <Tooltip title="Filter list">
//                     <IconButton>
//                         <FilterListIcon />
//                     </IconButton>
//                 </Tooltip>
//             )} */}
//         </Toolbar>
//     );
// };


const SearchBar = ({ search, setSearch }) => {
    return (<Toolbar
        sx={{
            pl: { sm: 0 },
            pr: { xs: 1, sm: 1 },
        }}
    >
        <TextField
            label='Búsqueda'
            variant='standard'
            size='small'
            fullWidth
            value={search}
            onChange={e => setSearch(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>
                )
            }} />
    </Toolbar>)
}

export default function EnhancedTable(props) {
    const {
        headers: headCells,
        rows,
        noBorder,
        options = { delete: true, update: true, read: true, return: false, loan: false },
        noSearch = false
    } = props
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [openMenu, setOpenMenu] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [search, setSearch] = React.useState('');

    const handleClickMenu = (e, id) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(id)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
        setOpenMenu(null)
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearch = (newSearch) => {
        setSearch(newSearch)
        setPage(0)
    }

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    let data = rows.filter(row => Object.values(row).some(value => String(value).toLowerCase().includes(search.toLowerCase())))

    let pageData = stableSort(data, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, boxShadow: noBorder ? 'none' : '', marginBottom: 0 }}>
                {/* <EnhancedTableToolbar numSelected={selected.length} title={title} /> */}
                {!noSearch && <SearchBar search={search} setSearch={handleSearch} />}
                <TableContainer >
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            headCells={headCells}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            options={options}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {pageData.map((row, index) => {
                                const isItemSelected = isSelected(row.name);

                                return (
                                    <TableRow
                                        hover
                                        // onClick={(event) => handleClick(event, row.name)}
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={`${row.name}-${row.id}`}
                                        selected={isItemSelected}
                                    >
                                        {/* <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell> */}
                                        {headCells.map(headCell => (
                                            <TableCell
                                                key={headCell.id}
                                                align={headCell.numeric ? 'right' : 'left'}
                                                padding={headCell.disablePadding ? 'none' : 'normal'}
                                                sortDirection={orderBy === headCell.id ? order : false}
                                            >
                                                {row[headCell.id]}
                                            </TableCell>
                                        ))}
                                        {Object.values(options).includes(true) && <TableCell
                                            align={'right'}
                                            padding={'none'}
                                            sortDirection={false}
                                        >
                                            <IconButton
                                                onClick={e => handleClickMenu(e, row.id)}
                                            >
                                                <MenuIcon />
                                            </IconButton>
                                            <Menu
                                                open={openMenu === row.id}
                                                anchorEl={anchorEl}
                                                onClose={handleCloseMenu}
                                            >
                                                {options.read && <MenuItem component={Link} to={`${row.id}`}><ViewIcon sx={{ mr: 1 }} fontSize='small' /> Ver</MenuItem>}
                                                {options.update && <MenuItem component={Link} to={`${row.id}/update`}><EditIcon sx={{ mr: 1 }} fontSize='small' />Editar</MenuItem>}
                                                {options.return && <MenuItem component={Link} to={`/loans/${row.id}/return`}><ReturnIcon sx={{ mr: 1 }} fontSize='small' />Registrar Devolución</MenuItem>}
                                                {options.loan && <MenuItem component={Link} to={`/loans/create/${row.id}`}><LoanIcon sx={{ mr: 1 }} fontSize='small' />Solicitar Préstamo</MenuItem>}
                                                {options.delete && <MenuItem sx={{ color: 'red' }}><DeleteIcon sx={{ mr: 1 }} fontSize='small' />Eliminar</MenuItem>}
                                            </Menu>
                                        </TableCell>}
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage='Filas por página:'
                    labelDisplayedRows={
                        ({ from, to, count }) =>
                            <>
                                {from}-{to === -1 ? count : to} {"de"} {count !== -1 ? count : <>{"Mas de"} {to}`</>}
                            </>
                    }
                />
            </Paper>
            {/* <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            /> */}
        </Box >
    );
}
