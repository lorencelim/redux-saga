import React from 'react'

const EditTableRow = ({
  truckUpdateData,
  handleTruckChange,
  handleTruckCancel,
  truck,
  handleUpdateTruck
}) => {

  return (
    <>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Truck Plate"
          name="truck_plate"
          value={truckUpdateData.truck_plate}
          onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Cargo Type"
          name="cargo_type"
          value={truckUpdateData.cargo_type}
          onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Driver"
          name="driver"
          value={truckUpdateData.driver}
          onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Truck Type"
          name="truck_type"
          value={truckUpdateData.truck_type}
          onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Truck Dimension"
          name="dimension"
          value={truckUpdateData.dimension}
          onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Parking Address"
          name="parking_address"
          value={truckUpdateData.parking_address}
          onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Production Year"
          name="production_year"
          value={truckUpdateData.production_year}
          onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Status"
          name="status"
          value={truckUpdateData.status}
          onChange={handleTruckChange}
        ></input>
      </td>
      <td>
        <button
          type="button"
          onClick={() => {handleUpdateTruck(truck.id)}}>
          Save
        </button>
        <button
          type="button"
          onClick={handleTruckCancel}>
          Cancel
        </button>
      </td>
    </>
  )
}

export default EditTableRow