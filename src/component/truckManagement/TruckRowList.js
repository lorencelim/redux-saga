import { Delete, Edit } from '@mui/icons-material';
import { IconButton, TableCell } from '@mui/material';
import React from 'react'

const TruckRowList = ({ truck, handleDelete, handleTruckEdit }) => {
    return (
        <>
            <TableCell
                sx={{ color: "#616161" }}
            >
                {truck.truck_plate}
            </TableCell>
            <TableCell 
                sx={{ color: "#616161", width:"200px"}}
            >
                {truck.cargo_type}
            </TableCell>
            <TableCell
                sx={{ color: "#616161" }}
            >
                {truck.driver}
            </TableCell>
            <TableCell
                sx={{ color: "#616161" }}
            >
                {truck.truck_type}
            </TableCell>
            <TableCell
                sx={{ color: "#616161" }}
            >
                {truck.dimension}
            </TableCell>
            <TableCell
                sx={{ color: "#616161" }}
            >
                {truck.parking_address}
            </TableCell>
            <TableCell
                sx={{ color: "#616161" }}
            >
                {truck.production_year}
            </TableCell>
            <TableCell
                sx={{ color: "#616161" }}
            >
                {truck.status}
            </TableCell>
            <TableCell>
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
            </TableCell>
        </>
    )
}

export default TruckRowList;