import React from "react";
import ClearHisttory from "./ClearHistory";
import HistoryItem from "./HistoryItem";

const HistoryList = ({items, clearHistory}) => {
    return(
        <div className='history'>
            <ul style={{marginLeft:'0px',padding:'0px'}}>
                {items.map(item=>{
                    return <HistoryItem value={item} key={item.index}/>
                })}
                {items.length ? '' : <p style={{whiteSpace:'nowrap'}}>No recent calculations</p>}
            </ul>
            {items.length ? <ClearHisttory onClick={clearHistory}/> : ''}
        </div>
    );
}
export default HistoryList;