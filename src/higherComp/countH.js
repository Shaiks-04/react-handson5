import React from "react";
import UpdatedComp from "./higherOcomp";


const CountH=(props)=>{
    return (
        <div className="countH">
            <h1 onMouseEnter={props.add}>Count : {props.count}</h1>
            <i>Hover the text⬆️</i>
        </div>
    );
}

export default UpdatedComp(CountH);