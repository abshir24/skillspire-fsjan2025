import React, { useState } from 'react';

function ButtonClick(){



    let state = {
        "button": "published",
        "modal" : "open"
    }
    
    let printMessage = () =>{
        console.log("Hello World!")
    }
    
    return (
        <div>
            <h3>Click Button</h3>

            <button onClick={ printMessage }>Click for message!</button>
        </div>
    );
}

export default ButtonClick;