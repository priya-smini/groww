import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AppContext from "../../../components/AppContext";
import TableLoader from "./TableLoader";


const TableView = (props) => {
    const myContext = useContext(AppContext);
    let navigate = useNavigate();
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
                    <TableHead>
                        <TableRow>
                            <TableCell>Bank</TableCell>
                            <TableCell>IFSC</TableCell>
                            <TableCell>Branch</TableCell>
                            <TableCell>Bank ID</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loader ? (
                            <TableLoader columns={5} />
                        ) : (
                            <>
                                {data
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        return (
                                            <TableRow hover tabIndex={-1} key={index}
                                                onClick={() => {
                                                    myContext.setDetailsPageData(row)
                                                    navigate(`/bank-details/:${row?.ifsc}`)
                                                }}
                                            >
                                                <TableCell>{row?.bank_name}</TableCell>
                                                <TableCell>{row?.ifsc}</TableCell>
                                                <TableCell>{row?.branch}</TableCell>
                                                <TableCell>{row?.bank_id}</TableCell>
                                                <TableCell>{row?.address}</TableCell>
                                            </TableRow>
                                        );
                                    })}</>
                        )}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default TableView