import React from 'react'

const EditTableRow = ({editFormData, handleTruckChange, handleTruckCancel, truck, handleUpdateTruck }) => {
  return (
    <>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Truck Plate" 
        name="truck_plate"
        value={editFormData.truck_plate}
        onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Cargo Type"
        name="carge_type"
        value={editFormData.cargo_type}
        onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Driver" 
        name="driver"
        value={editFormData.driver}
        onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Truck Type"
        name="truck_type"
        value={editFormData.truck_type}
        onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Truck Dimension" 
        name="dimension"
        value={editFormData.dimension}
        onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Parking Address" 
        name="parking_address"
        value={editFormData.parking_address}
        onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Production Year"
        name="production_year"
        value={editFormData.production_year}
        onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Status" 
        name="status"
        value={editFormData.status}
        onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <button type="button" onClick={handleUpdateTruck(truck.id)}>Save</button>
        <button type="button" onClick={handleTruckCancel}>Cancel</button>
      </td>
    </>
  )
}

export default EditTableRow