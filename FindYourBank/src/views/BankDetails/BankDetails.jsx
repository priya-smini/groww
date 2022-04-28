import { Paper, TextField, FormGroup } from "@mui/material";
import { useContext } from "react";
import AppContext from "../../components/AppContext";
import "./style.css"

const BankDetails = (props) => {
    const myContext = useContext(AppContext);
    return (
        <div>
            <h3>BankDetails</h3>
            <div>
                <div className="form-div">
                    <div className="inner-div">
                        <h5 className="header">Bank ID</h5>
                        <TextField variant="outlined" size="small" value={myContext.detailsPageData?.bank_id} inputProps={
                            { readOnly: true, }
                        } />
                    </div>
                    <div className="inner-div">
                        <h5 className="header">Branch</h5>
                        <TextField variant="outlined" size="small" value={myContext.detailsPageData?.branch} inputProps={
                            { readOnly: true, }
                        } />
                    </div>
                    <div className="inner-div">
                        <h5 className="header">IFSC</h5>
                        <TextField variant="outlined" size="small" value={myContext.detailsPageData?.ifsc} inputProps={
                            { readOnly: true, }
                        } />
                    </div>
                </div>
                {/* <div className="form-div"> */}
                    <div className="inner-div">
                        <h5 className="header">Bank Name</h5>
                        <TextField fullWidth variant="outlined" size="small" value={myContext.detailsPageData?.bank_name} inputProps={
                            { readOnly: true, }
                        } />
                    </div>

                {/* </div> */}
                <div className="form-div">
                    <div className="inner-div">
                        <h5 className="header">District</h5>
                        <TextField variant="outlined" size="small" value={myContext.detailsPageData?.district} inputProps={
                            { readOnly: true, }
                        } />
                    </div>
                    <div className="inner-div">
                        <h5 className="header">City</h5>
                        <TextField variant="outlined" size="small" value={myContext.detailsPageData?.city} inputProps={
                            { readOnly: true, }
                        } />
                    </div>
                    <div className="inner-div">
                        <h5 className="header">State</h5>
                        <TextField variant="outlined" size="small" value={myContext.detailsPageData?.state} inputProps={
                            { readOnly: true, }
                        } />
                    </div>
                </div>
                <div className="inner-div">
                    <h5 className="header">Address</h5>
                    <TextField fullWidth variant="outlined" size="small" value={myContext.detailsPageData?.address} inputProps={
                        { readOnly: true, }
                    } />
                </div>
            </div>
        </div>
    )
}

export default BankDetails