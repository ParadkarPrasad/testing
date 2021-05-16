import React from "react";
import {add,sub,mul,div} from "./Calc";
function App() {
    return (
        <>
            <ul>
                <li>The sum of two number is {add(40, 4)}</li>
                <li>The difference of two number is {sub(40, 4)}</li>
                <li>The division of two number is {div(40, 3)}</li>
                <li>The multiplication of two number is {mul(40, 4)}</li>
            </ul>
        </>

    );
}
export default App;
