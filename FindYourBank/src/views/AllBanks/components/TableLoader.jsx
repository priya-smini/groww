import { TableCell,TableRow,Skeleton } from '@mui/material'
import React from 'react'

const TableLoader = (props) => {
    const { columns } = props
    return (
        <React.Fragment>
            {
                Array(10)
                    .fill("")
                    .map((item, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                <Skeleton/>
                            </TableCell>
                            {Array(columns)
                                .fill("").map((item, index) => (
                                    <TableCell key={index} align="right">
                                        <Skeleton height={20} />
                                    </TableCell>
                                ))}
                        </TableRow>
                    ))
            }
        </React.Fragment>
    )
}

export default TableLoader
