import React, { useState } from "react";

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "peter",
        age: 24,
        message: "random message"
    });
    const changeMessage = () => {
        setPerson({ ...person, message: "hello world" }); //Need to use spread operator to preserve older values if using an object
    };

    return (
        <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className="btn" onClick={changeMessage}>
                change message
            </button>
        </>
    );
};

export default UseStateObject;
