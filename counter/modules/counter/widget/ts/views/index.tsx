import React from "react";

export /*bundle*/
function Widget() {
    const [count, setCount] = React.useState(0);
    const add = () => setCount(count + 1);

    return (
        <div className="item">
            <h3>React counter</h3>
            <button onClick={add}>click here: {count}</button>
        </div>
    );
}