import React from 'react';

const Data = (props) => (
    <div>
        <h1>{props.data.date.toString()}</h1>
        <h1>{props.data.amount}</h1>
        <h1>{props.data.bid}</h1>
    </div>
);

export default Data;
