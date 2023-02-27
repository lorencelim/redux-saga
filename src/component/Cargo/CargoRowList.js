import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const CargoRowList = ({ cargo, handleCargoDelete, handleCargoEdit, StyledTableCell }) => {
    return (
        <>
            <StyledTableCell sx={{ width: "325px" }} >
                {cargo.value}
            </StyledTableCell>
            <StyledTableCell >
                <IconButton
                    aria-label="edit"
                    sx={{ color: "#ffb300" }}
                    type="button"
                    onClick={(e) => handleCargoEdit(e, cargo)}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    arial-label="delete"
                    sx={{ color: "#ffb300" }}
                    type="button"
                    onClick={() => handleCargoDelete(cargo.id)}
                >
                    <Delete />
                </IconButton>
            </StyledTableCell>
        </>
    );
};

export default CargoRowList;