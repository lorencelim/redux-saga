import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const UserRowList = ({ user, handleUserDelete, handleUserEdit, StyledTableCell }) => {
    return (
        <>
            {/* {isNotesDataFetching ? <CircularProgress /> : null} */}
            <StyledTableCell sx={{ width: "325px" }} >
                {user.username}
            </StyledTableCell>
            <StyledTableCell sx={{ width: "325px" }} >
                ********
            </StyledTableCell>
            <StyledTableCell sx={{ width: "325px" }} >
                {user.designation}
            </StyledTableCell>
            <StyledTableCell >
                <IconButton
                    aria-label="edit"
                    sx={{ color: "#ffb300" }}
                    type="button"
                    onClick={(e) => handleUserEdit(e, user)}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    arial-label="delete"
                    sx={{ color: "#ffb300" }}
                    type="button"
                    onClick={() => handleUserDelete(user.id)}
                >
                    <Delete />
                </IconButton>
            </StyledTableCell>
        </>
    );
};

export default UserRowList;