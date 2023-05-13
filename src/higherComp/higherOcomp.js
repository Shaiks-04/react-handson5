import React,{useState} from "react";

const  UpdatedComp=(OriginalComp)=>{
    function NewComp(){
        const [count,setCount]=useState(0);
        const add=()=>{
            setCount(count+1);
        }
        return (
            <>
                <OriginalComp  count={count} add={add}/>
            </>
        )
    }
    return NewComp;
}

export default UpdatedComp;