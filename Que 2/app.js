import React from "react";
import { ReactDOM } from "react";
import Button from "./Button";

const handleClick=()=>{
    console.log("Button Clicked...!");
}

const app=()=>{
    return(
        <div>
            <Button text="click me" onClick={"handleClick"}/>            
        </div>
    )
}

ReactDOM.render(<app/>,document.getElementById('root'));