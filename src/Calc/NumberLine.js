import React from "react";

const style = {
    textAlign:'right',
    marginTop: '1rem',
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    color: '#fff',
    outline: 'none'
}

const NumberLine = ({numbers}) => {
    return(
    <input value={numbers} readOnly style={style}/>
    );
}

export default NumberLine;