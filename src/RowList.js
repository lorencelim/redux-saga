import React from 'react'

const RowList = ({ items, handleCheck, handleDelete }) => {
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
    {items.map((item) => {
            return (
                <tr>
                    <td><input type="item" key={item.id} /></td>
                    <td><input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked} /></td>
                    <td><label
                        onDoubleClick={() => handleCheck(item.id)}
                    >{item.item}</label></td>
                    <td><button
                        onClick={() => handleDelete(item.id)
                        }>Delete</button></td>
                </tr>
            )
        })}
}



export default RowList;