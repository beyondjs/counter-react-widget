import * as React from "react";

export /*bundle*/
function Widget() {
    const [count, setCount] = React.useState(0);
    const add = () => setCount(count + 1);

    return (
        <div className="main">
            <h1>{count}</h1>
            <button onClick={add}>click</button>
        </div>
    );
}