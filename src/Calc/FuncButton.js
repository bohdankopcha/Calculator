import React from "react";

const FuncButton = ({action, onClick}) =>{
    return(
        <button onClick={()=>onClick(action)}>{action}</button>
    );
}

export default FuncButton;