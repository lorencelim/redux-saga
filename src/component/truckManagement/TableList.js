import React from 'react'
import ReadRow from './ReadRow';

const TableList = ({ trucks, handleCheck, handleDelete }) => {
    return (
        <table trucks={trucks}>
            <thead>
                <tr>
                    <th> Truck Plate </th>
                    <th> Cargo Type </th>
                    <th> Driver </th>
                    <th> Truck Type </th>
                    <th> Dimension </th>
                    <th> Parking Address </th>
                    <th> Production Year </th>
                    <th> Status </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                {trucks.map(truck => (
                    <tr key={truck.id} truck={truck}>
                        <td>{truck.truck_plate}</td>
                        <td>{truck.cargo_type}</td>
                        <td>{truck.driver}</td>
                        <td>{truck.truck_type}</td>
                        <td>{truck.dimension}</td>
                        <td>{truck.parking_address}</td>
                        <td>{truck.production_year}</td>
                        <td>{truck.status}</td>

                        {/* <ReadRow trucks={trucks} handleCheck={handleCheck} handleDelete={handleDelete} /> */}

                        <td>
                            <button>Edit</button>
                            <button onClick={() => handleDelete(truck.id)}>
                                Delete</button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableList;