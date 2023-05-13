import React from "react";

function HOC(){
    return (
        <div className="info">
            <p>In React, Higher-Order Components <b>(HOC)</b> are functions that take in a component and return a new component with additional functionality. This is a design pattern used to enhance the capabilities of components and to promote code reusability.</p>
            <p>To create an HOC in React, you can define a function that takes in a component as an argument and returns a new component with additional props. </p>  
            <p>HOCs are a powerful tool in React that allows you to add functionality to components in a modular and reusable way. However, it's important to use them sparingly and to be mindful of their impact on performance and code maintainability.</p>
            <h4>Reason to use Higher-Order component:</h4>
            <ul>
                <li>Easy to handle</li>
                <li>Get rid of copying the same logic in every component</li>
                <li>Makes code more readable</li>
            </ul>
        </div>
    )
}

export default HOC;