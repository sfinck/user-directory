import React from "react";

function ResultList(props) {
    return (


        <table>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
            </tr>

            {props.data.map((user, index) => (
                <tr>
                    <td key={index}>{user.name.first}</td>
                    <td key={index + 1}>{user.name.last}</td>
                    <td key={index + 2} >{user.dob.age} </td>
                </tr>
            ))}
        </table>

    );

}

export default ResultList;
