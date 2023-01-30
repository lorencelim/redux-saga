import React from 'react'

const EditTableRow = () => {
  return (
    <tr>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Truck Plate" 
        name="truck_plate"
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Cargo Type"
        name="carge_type"
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Driver" 
        name="driver"
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Truck Type"
        name="truck_type"
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Truck Dimension" 
        name="dimension"
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Parking Address" 
        name="parking_address"
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Production Year"
        name="production_year"
        ></input>
      </td>
      <td>
        <input 
        type="text" 
        required="required" 
        placeholder="Status" 
        name="status"
        ></input>
      </td>
    </tr>
  )
}

export default EditTableRow