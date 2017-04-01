import React from 'react';

export default function (props) {
   let batterpositions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
return (
    <div>
        <table className="table">
            <thead>
                <tr>
                <th>{props.team}</th>
                </tr>
            </thead>
            <tbody>
                {
                batterpositions.map((position, i) => (
                    <tr key={i}>
                        <td onClick={props.addBatter}>
                            <span>{ position }.  Add Batter </span>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
    
  );

}