import React from "react";

function PureCompInfo(){
    return (
        <div className="info">
            <p>PureComponent is a base class for components that implements <i><b>shouldComponentUpdate</b></i> method with a shallow comparison of props and state.The shouldComponentUpdate method determines if a component should re-render or not by comparing the current props and state to the next props and state.</p>
            <p>PureComponent is not always necessary or appropriate. It is important to understand when to use PureComponent versus when to use a regular Component and manually implement shouldComponentUpdate.</p>
            <p> In general, PureComponent is most effective when the component has a large number of props or when the props are large objects or arrays.</p>
        </div>
    )

}

export default PureCompInfo;