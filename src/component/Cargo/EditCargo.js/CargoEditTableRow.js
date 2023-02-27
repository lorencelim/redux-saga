import { Check, Clear } from "@mui/icons-material";
import { IconButton, TableCell, TextField } from "@mui/material";
import React from "react";

const CargoEditTableRow = ({
  cargoUpdateData,
  handleCargoChange,
  handleCargoCancel,
  cargo,
  handleUpdateCargo
}) => {
  // console.log(cargoUpdateData.value);
  return (
    <>
      <TableCell>
        <TextField
          label="Cargo Type"
          type="text"
          required="required"
          name="value"
          value={cargoUpdateData.value}
          onChange={handleCargoChange}
        />
      </TableCell>
      <TableCell>
        <IconButton
          aria-label="save"
          sx={{ color: "#ffb300" }}
          type="button"
          onClick={() => { handleUpdateCargo(cargo.id) }}>
          <Check />
        </IconButton>
        <IconButton
          aria-label="cancel"
          sx={{ color: "#ffb300" }}
          type="button"
          onClick={handleCargoCancel}>
          <Clear />
        </IconButton>
      </TableCell>
    </>
  );
};

export default CargoEditTableRow