import React from 'react'

const TruckRowList = ({ truck, handleDelete, handleTruckEdit }) => {
    return (
        <>
            <td>{truck.truck_plate}</td>
            <td>{truck.cargo_type}</td>
            <td>{truck.driver}</td>
            <td>{truck.truck_type}</td>
            <td>{truck.dimension}</td>
            <td>{truck.parking_address}</td>
            <td>{truck.production_year}</td>
            <td>{truck.status}</td>
            <td>
                <button type="button" onClick={(e) => handleTruckEdit(e, truck)}>
                    Edit
                </button>
                <button type="button" onClick={() => handleDelete(truck.id)}>
                    Delete
                </button>
            </td>
        </>
    )
}




export default TruckRowList;