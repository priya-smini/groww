import React from 'react'
import "./style.css"

export default function TableWithNoRecord() {
    return (
        <caption className="tableCaption">
            <div className="emptyTableDiv">No Record Found</div>
        </caption>
    )
}