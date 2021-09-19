import React from "react";

const NumButton = ({number, onClick}) => {
    return(
        <button onClick={()=>onClick(number)}>{number}</button>
    );
}

export default NumButton;