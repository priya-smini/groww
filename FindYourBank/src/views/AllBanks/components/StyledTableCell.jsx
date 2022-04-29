import { styled, TableCell, tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#D9F8F0",
        height: "0.5em"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default StyledTableCell