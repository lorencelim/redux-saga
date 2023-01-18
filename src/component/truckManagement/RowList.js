import React from 'react'

const RowList = ({ trucks, handleCheck, handleDelete }) => {

        <tr>
            <th> Truck Plate </th>
            <th> Cargo Type </th>
            <th> Driver </th>
            <th> Truck Type </th>
            <th> Price </th>
            <th> Dimension </th>
            <th> Parking Address </th>
            <th> Production Year </th>
            <th> Status </th>
            <th> Description </th>
        </tr>
    {trucks.map((truck) => {
            return (
                <tr>
                    <td><input type="truck" key={truck.id} /></td>
                    <td><input
                        type="checkbox"
                        onChange={() => handleCheck(truck.id)}
                        checked={truck.checked} /></td>
                    <td><label
                        onDoubleClick={() => handleCheck(truck.id)}
                    >{truck.truck}</label></td>
                    <td><button
                        onClick={() => handleDelete(truck.id)
                        }>Delete</button></td>
                </tr>
            )
        })}
}



export default RowList;