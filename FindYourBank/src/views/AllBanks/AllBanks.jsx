import { FormControl, IconButton, InputLabel, MenuItem, Paper, Select, InputBase } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import axios from "axios";
import TableView from "./components/TableView";
import BankDetails from "../BankDetails"
import { useContext } from 'react';
import AppContext from '../../components/AppContext';


const AllBanks = () => {
    const [city, setCity] = useState("MUMBAI")
    const [category, setCategory] = useState("bank_name")
    const [cacheData, setCacheData] = useState([])
    const [tableData, setTableData] = useState([])
    const [loader, setLoader] = useState(false)
    const [searchText, setSearchText] = useState('')

    const handleChangeCity = (event) => {
        setCity(event.target.value);
    };
    const handleChangeCategory = (event) => {
        setCategory(event.target.value)
    }
    const handleChangeSearch = (event) => {
        setSearchText(event.target.value)
        const resData = []
        const data = Array.from(cacheData)
        data.map((val) => {
            const str = val[category].substring(0, event.target.value.length).toLowerCase()
            if (str === event.target.value.toLowerCase()) {
                resData.push(val)
            }
        })
        setTableData(resData)
    }
    const fetchTableData = ({ city = "MUMBAI" }) => {
        setLoader(true)
        axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`).then((response) => {
            setTableData(response?.data)
            setCacheData(response?.data)
            setLoader(false)
        })
    }

    useEffect(() => {
        const prop = {
            city: city
        }
        fetchTableData(prop)
    }, [city])

    return (
        <div>
            {/* Top section */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>All Banks</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                    {/* Select city dropdown */}
                    <FormControl sx={{ m: 1, minWidth: "7.5rem" }} size="small">
                        <InputLabel id="demo-select-small">Select City</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={city}
                            label="Select City"
                            onChange={handleChangeCity}
                        >
                            <MenuItem value={"MUMBAI"}>Mumbai</MenuItem>
                            <MenuItem value={"BANGALORE"}>Bangalore</MenuItem>
                            <MenuItem value={"CHENNAI"}>Chennai</MenuItem>
                            <MenuItem value={"BHUBANESWAR"}>Bhubaneswar</MenuItem>
                            <MenuItem value={"PUNE"}>Pune</MenuItem>
                        </Select>
                    </FormControl>
                    {/* Select category dropdown */}
                    <FormControl sx={{ m: 1, minWidth: "10rem" }} size="small">
                        <InputLabel id="demo-select-small">Select Category</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={category}
                            label="Select Category"
                            onChange={handleChangeCategory}
                        >
                            <MenuItem value={"bank_name"}>Bank</MenuItem>
                            <MenuItem value={"ifsc"}>IFSC</MenuItem>
                            <MenuItem value={"branch"}>Branch</MenuItem>
                            <MenuItem value={"bank_id"}>Bank ID</MenuItem>
                            <MenuItem value={"address"}>Address</MenuItem>
                        </Select>
                    </FormControl>
                    {/* Search box */}
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "18rem", height: "2.5rem" }}
                    >
                        <InputBase
                            size="small"
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchText}
                            onChange={(e) => handleChangeSearch(e)}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>

                    </Paper>
                </div>
            </div>
            <TableView data={tableData} loader={loader} />
        </div>
    )
}

export default AllBanks;