import { useMemo, useState } from "react";

function PureCountH(){
    const [count,setCount]=useState(0);
    const Mcount=useMemo(()=>count,[count])

    const click=()=>{
        setCount(count+1);
    }

    return (
        <div className="pure">
            <p>Hover Button⬇⬇</p>
            <button onMouseEnter={click}>
                {Mcount}
            </button>
        </div>
    )
}

export default PureCountH;