import React, { useState, Fragment } from 'react';
import EdiTableRow from '../EditTruck/EditTableRow';
import TruckRowList from './TruckRowList';



const TableList = ({ trucks, handleDelete }) => {

    const [editTruckId, setEditTruckId] = useState(null);

    const [editFormData, setEditFormData] = useState({
        truck_plate: "",
        truck_type: "",
        cargo_type: "",
        driver: "",
        price: "",
        dimension: "",
        parking_address: "",
        production_year: "",
        status: "",
        description: ""
    })


    const handleEditClick = (e, truck) => {
        e.preventDefault();
        setEditTruckId(truck.id);
    }

    return (
        <from>
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
                        <Fragment>
                            {editTruckId === truck.id ? (
                                <EdiTableRow />
                            ) : (
                                <TruckRowList truck={truck} handleDelete={handleDelete} handleEditClick={handleEditClick} />
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </from>
    )
}

export default TableList;