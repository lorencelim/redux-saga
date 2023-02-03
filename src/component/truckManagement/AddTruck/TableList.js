import React, { useState, Fragment } from 'react';
import axios from '../../../app/api/axios';
import EdiTableRow from '../EditTruck/EditTableRow';
import TruckRowList from './TruckRowList';

const TableList = ({ trucks, handleDelete, setTrucks }) => {

    const [truckUpdateData, setTruckUpdateData] = useState({
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
        const newFormData = { ...truckUpdateData };
        newFormData[fieldName] = fieldValue;
        setTruckUpdateData(newFormData);
    }

    const handleUpdateTruck = async (id) => {
        const updatedTruck = {
            id: editTruckId,
            truck_plate: truckUpdateData.truck_plate,
            truck_type: truckUpdateData.truck_type,
            cargo_type: truckUpdateData.cargo_type,
            driver: truckUpdateData.driver,
            price: truckUpdateData.price,
            dimension: truckUpdateData.dimension,
            parking_address: truckUpdateData.parking_address,
            production_year: truckUpdateData.production_year,
            status: truckUpdateData.status
        }
        try {
            const response = await axios.put(`/trucks/${id}`, updatedTruck);
            setTrucks(trucks.map(
                truck => truck.id === id ?
                    { ...response.data } : truck));
                    setEditTruckId(null);
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
        setTruckUpdateData(formValues);
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
                                        truckUpdateData={truckUpdateData}
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