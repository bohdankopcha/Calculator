import React from "react";

const EqualsButton = ({onClick}) => {
    return (
        <button onClick={()=>onClick()} style={{borderRadius:'4px', background:'rgb(57, 110, 106)'}}>=</button>
    );
}

export default EqualsButton;