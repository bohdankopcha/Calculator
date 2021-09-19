import React from "react";

const ClearHisttory = ({onClick}) => {
    return(
        <button onClick={()=>onClick()} className='clear-button'>Clear history</button>
    )
}

export default ClearHisttory;