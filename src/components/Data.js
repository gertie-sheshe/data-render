import React from 'react';

const Data = ({data: {id, date, amount, bid}}) => (
    <tbody className="striped">
        <tr>
            <td>{id}</td>
            <td>{date.toString()}</td>
            <td>{amount}</td>
            <td>{bid}</td>
        </tr>
    </tbody>
);

export default Data;
