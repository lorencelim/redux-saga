import React, { useState, Fragment } from 'react';
import axios from '../../../app/api/axios';
import EdiTableRow from '../EditTruck/EditTableRow';
import TruckRowList from './TruckRowList';

const TableList = ({ trucks, handleDelete, setTrucks }) => {

    const [editFormData, setEditFormData] = useState({
        truck_plate: "",
        truck_type: "",
        cargo_type: "",
        driver: "",
        price: "",
        dimension: "",
        parking_address: "",
        production_year: "",
        status: ""
    });

    const [editTruckId, setEditTruckId] = useState(null);

    const handleTruckChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleUpdateTruck = async (id) => {
        const updatedTruck = {
            id: editTruckId,
            truck_plate: editFormData.truck_plate,
            truck_type: editFormData.truck_type,
            cargo_type: editFormData.cargo_type,
            driver: editFormData.driver,
            price: editFormData.price,
            dimension: editFormData.dimension,
            parking_address: editFormData.parking_address,
            production_year: editFormData.production_year,
            status: editFormData.status
        }
        try {
            const response = await axios.put(`/trucks/${id}`, updatedTruck);
            setTrucks(trucks.map(truck => truck.id === id ? { ...response.data } : truck));
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }


    const handleTruckEdit = (e, truck) => {
        e.preventDefault();
        setEditTruckId(truck.id);

        const formValues = {
            truck_plate: truck.truck_plate,
            truck_type: truck.truck_type,
            cargo_type: truck.cargo_type,
            driver: truck.driver,
            price: truck.price,
            dimension: truck.dimension,
            parking_address: truck.parking_address,
            production_year: truck.production_year,
            status: truck.status
        };
        setEditFormData(formValues);
    };

    const handleTruckCancel = () => {
        setEditTruckId(null);
    };

    return (
        <form>
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
                        <tr key={truck.id}>
                            <Fragment>
                                {editTruckId === truck.id ? (
                                    <EdiTableRow
                                        editFormData={editFormData}
                                        handleTruckChange={handleTruckChange}
                                        handleTruckCancel={handleTruckCancel}
                                        truck={truck}
                                        handleUpdateTruck={handleUpdateTruck}
                                    />
                                ) : (
                                    <TruckRowList
                                        truck={truck}
                                        handleDelete={handleDelete}
                                        handleTruckCancel={handleTruckCancel}
                                        handleTruckEdit={handleTruckEdit}
                                    />
                                )}
                            </Fragment>
                        </tr>
                    ))}
                </tbody>
            </table>
        </form>
    )
}

export default TableList;