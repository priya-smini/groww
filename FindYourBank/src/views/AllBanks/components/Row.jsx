import { TableCell, TableRow, Tooltip } from "@mui/material";
import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import AppContext from "../../../components/AppContext";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from "@mui/material";

const Row = (props) => {
    const { row} = props
    const myContext = useContext(AppContext);
    const ref = useRef(myContext.favoritesData)
    let navigate = useNavigate();

    const handleClickFavorite = () => {
        let tempArray = Array.from(myContext.favoritesData)
        tempArray.push(row)
        myContext.setFavoritesData(tempArray)
    }

    const handleClickUnFavorite = () => {
        let temp = Array.from(myContext.favoritesData)
        ref.current = temp.filter(data => data.ifsc !== row.ifsc)
        myContext.setFavoritesData(ref.current)
    }

    return (
        <React.Fragment>
            <TableRow hover tabIndex={-1} key={row?.ifsc}>
                <TableCell>
                    {
                        myContext.favoritesData.filter((data) => data?.ifsc === row.ifsc)[0]?.ifsc === row.ifsc ?
                            <IconButton onClick={() => handleClickUnFavorite()}><StarIcon style={{color:"#00D09C"}}/></IconButton>
                            : <IconButton onClick={() => handleClickFavorite()}>
                                <StarBorderIcon style={{color:"#00D09C"}}/>
                            </IconButton>
                    }
                </TableCell>
                <TableCell>{row?.bank_name}</TableCell>
                <TableCell>{row?.ifsc}</TableCell>
                <TableCell>{row?.branch}</TableCell>
                <TableCell>{row?.bank_id}</TableCell>
                <TableCell>{row?.address}</TableCell>
                <TableCell>
                    <Tooltip title="Click here for bank details">
                        <IconButton
                            onClick={() => {
                                myContext.setDetailsPageData(row)
                                navigate(`/bank-details/:${row?.ifsc}`)
                            }}
                        >
                            <ArrowForwardIosIcon style={{color:"#00D09C"}}/>
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default Row