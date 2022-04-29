import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";
import Row from "./Row";
import TableLoader from "./TableLoader";
import StyledTableCell from "./StyledTableCell";
import TableWithNoRecord from "./TableWithNoRecord";

const TableView = (props) => {
    const { data, loader } = props
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: "60vh" }}>
                <Table stickyHeader aria-label="sticky table" size="small">
                    {!loader && data?.length === 0 ? (
                        <TableWithNoRecord />
                    ) : (
                        <></>
                    )}
                    <TableHead style={{ height: "0.5em", }}>
                        <TableRow>
                            <StyledTableCell ></StyledTableCell>
                            <StyledTableCell >Bank</StyledTableCell>
                            <StyledTableCell >IFSC</StyledTableCell>
                            <StyledTableCell >Branch</StyledTableCell>
                            <StyledTableCell >Bank ID</StyledTableCell>
                            <StyledTableCell >Address</StyledTableCell>
                            <StyledTableCell ></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loader ? (
                            <TableLoader columns={6} />
                        ) : (
                            <>
                                {data
                                    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    ?.map((row, index) => {
                                        return (
                                            <Row row={row} index={index} key={row?.ifsc} />
                                        );
                                    })}</>
                        )}

                    </TableBody>
                </Table>
            </TableContainer>
            {!loader && data?.length === 0 ? (
                <></>
            ) : (
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data ? data.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}

        </Paper>
    )
}

export default TableView