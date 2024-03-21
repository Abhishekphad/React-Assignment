// Create a component named "Person" that takes two props - "name" and "age". The component should
// display the persons name and age in a paragraph element

import React from 'react';
import ReactDom from 'react-dom';
import person from './person';

const App=()=>{
    return(
        <div>
            <person name="Abhishek" age={22}/>
        </div>
    )
}

ReactDom.render(<App/>,document.getElementById('root'));