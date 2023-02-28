import { Check, Clear } from "@mui/icons-material";
import { IconButton, TableCell, TextField } from "@mui/material";
import React from "react";

const UserEditTableRow = ({
  userUpdateData,
  handleUserChange,
  handleUserCancel,
  user,
  handleUpdateUser
}) => {
  return (
    <>
      <TableCell>
        <TextField
          label="Username"
          type="text"
          required={true}
          name="username"
          value={userUpdateData.username}
          onChange={handleUserChange}
        />
      </TableCell>
      <TableCell>
        <TextField 
          label="Password"
          type="text"
          required={true}
          name="password"
          value={userUpdateData.password}
          onChange={handleUserChange}
        />
      </TableCell>
      <TableCell>
        <TextField 
          label="Designation"
          type="text"
          required={true}
          name="designation"
          value={userUpdateData.designation}
          onChange={handleUserChange}
        />
      </TableCell>
      <TableCell>
        <IconButton
          aria-label="save"
          sx={{ color: "#ffb300" }}
          type="button"
          onClick={() => { handleUpdateUser(user.id) }}>
          <Check />
        </IconButton>
        <IconButton
          aria-label="cancel"
          sx={{ color: "#ffb300" }}
          type="button"
          onClick={handleUserCancel}>
          <Clear />
        </IconButton>
      </TableCell>
    </>
  );
};

export default UserEditTableRow