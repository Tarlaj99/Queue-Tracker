import { useState } from 'react';
function Test(){
    
    const [x, setX] = useState(1);

    let random = Math.floor(Math.random() * 10);
    function handleClick(){
        setX(x + 1);
    }
    return(
        <>
            <h1>{random}</h1>
            <button onClick={handleClick}>Click me!</button>
        </>
    )
}
export default Test