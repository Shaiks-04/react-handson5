import React from "react";
import UpdatedComp from "./higherOcomp";

function CountC(props){
    return (
        <div className="countC">
            <h1>Count : {props.count}</h1>
            <button onClick={props.add }className="clickk">Click!!</button>
        </div>
    );
}

export default UpdatedComp(CountC);