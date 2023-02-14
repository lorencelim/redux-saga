import { Check, Clear } from "@mui/icons-material";
import { IconButton, TableCell, TextField } from "@mui/material";
import React from "react";


const EditTableRow = ({
  truckUpdateData,
  handleTruckChange,
  handleTruckCancel,
  truck,
  handleUpdateTruck
}) => {
  return (
    <>
      <TableCell>
        <TextField
          label="Truck Plate"
          type="text"
          required="required"
          placeholder="Truck Plate"
          name="truck_plate"
          value={truckUpdateData.truck_plate}
          onChange={handleTruckChange}
        />
      </TableCell>
      <TableCell>
        <TextField 
          label="Cargo Type"
          type="text"
          required="required"
          placeholder="Cargo Type"
          name="cargo_type"
          value={truckUpdateData.cargo_type}
          onChange={handleTruckChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Driver"
          type="text"
          required="required"
          placeholder="Driver"
          name="driver"
          value={truckUpdateData.driver}
          onChange={handleTruckChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Truck Type"
          type="text"
          required="required"
          placeholder="Truck Type"
          name="truck_type"
          value={truckUpdateData.truck_type}
          onChange={handleTruckChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Truck Dimension"
          type="text"
          required="required"
          placeholder="Truck Dimension"
          name="dimension"
          value={truckUpdateData.dimension}
          onChange={handleTruckChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Parking Address"
          type="text"
          required="required"
          placeholder="Parking Address"
          name="parking_address"
          value={truckUpdateData.parking_address}
          onChange={handleTruckChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Production Year"
          type="text"
          required="required"
          placeholder="Production Year"
          name="production_year"
          value={truckUpdateData.production_year}
          onChange={handleTruckChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Status"
          type="text"
          required="required"
          placeholder="Status"
          name="status"
          value={truckUpdateData.status}
          onChange={handleTruckChange}
        />
      </TableCell>
      <TableCell>
        <IconButton
          aria-label="save"
          sx={{ color: "#ffb300" }}
          type="button"
          onClick={() => { handleUpdateTruck(truck.id) }}>
          <Check />
        </IconButton>
        <IconButton
          aria-label="cancel"
          sx={{ color: "#ffb300" }}
          type="button"
          onClick={handleTruckCancel}>
          <Clear />
        </IconButton>
      </TableCell>
    </>
  )
}

export default EditTableRow