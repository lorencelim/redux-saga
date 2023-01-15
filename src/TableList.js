import React from 'react'

const TableList = ({ items, handleCheck, handleDelete }) => {
    return (
        <table items={items}>
            <thead>
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
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id} item={item}>
                        <td>{item.vehicle}</td>
                        <td>{item.checked}</td>
                        <td>{item.item}</td>
                        <td><button onClick={() => handleDelete(item.id)}>
                            Delete
                        </button></td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableList;