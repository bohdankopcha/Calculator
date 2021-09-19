import React from "react";

const ClearButton = ({onClick}) => {
    return (
        <button onClick={()=>onClick()} style={{background:'rgb(232, 181, 37)', borderRadius:'5px'}}>C</button>
    );
}

export default ClearButton;