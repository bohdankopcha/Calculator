import React from "react";

const HistoryItem = ({value}) => {
    return(
        <li style={{listStyleType: 'none',whiteSpace:'nowrap'}}>{value}</li>
    )
}

export default HistoryItem;