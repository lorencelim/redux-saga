import { Delete, Edit } from '@mui/icons-material';
import { IconButton, TableCell } from '@mui/material';
import React from 'react'

const TruckRowList = ({ truck, handleDelete, handleTruckEdit, StyledTableCell }) => {
    return (
        <>
            <StyledTableCell>
                {truck.truck_plate}
            </StyledTableCell>
            <StyledTableCell sx={{ width: "200px" }} >
                {truck.cargo_type}
            </StyledTableCell>
            <StyledTableCell>
                {truck.driver}
            </StyledTableCell>
            <StyledTableCell>
                {truck.truck_type}
            </StyledTableCell>
            <StyledTableCell>
                {truck.dimension}
            </StyledTableCell>
            <StyledTableCell>
                {truck.parking_address}
            </StyledTableCell>
            <StyledTableCell>
                {truck.production_year}
            </StyledTableCell>
            <StyledTableCell>
                {truck.status}
            </StyledTableCell>
            <StyledTableCell>
                <IconButton
                    aria-label="edit"
                    sx={{ color: "#ffb300" }}
                    type="button"
                    onClick={(e) => handleTruckEdit(e, truck)}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    arial-label="delete"
                    sx={{ color: "#ffb300" }}
                    type="button"
                    onClick={() => handleDelete(truck.id)}
                >
                    <Delete />
                </IconButton>
            </StyledTableCell>
        </>
    )
}

export default TruckRowList;