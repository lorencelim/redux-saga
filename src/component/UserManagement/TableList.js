import {
    Box, CircularProgress, FormControl,
    Paper, styled, Table, TableBody,
    TableCell, tableCellClasses, TableContainer,
    tableContainerClasses, TableHead, TablePagination,
    TableRow, tableRowClasses
} from "@mui/material";
import React, { useState, Fragment } from "react";
import UserEditTableRow from "./EditUser/UserEditTableRow";
import UserRowList from "./UserRowList";
import { useDispatch } from "react-redux";
import { initDeleteUser } from "../../containers/user/deleteUser/store/actions";
import { initGetListUser } from "../../containers/user/userList/store/actions";
import { initEditUser } from "../../containers/user/editUser/store/actions";

const TableList = ({ usersList, isUsersDataFetching }) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableContainerClasses}`]: {
            ".MuiFormLabel-root.Mui-focused": {
                color: "#ffb300"
            },
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: "#ffb300",
            }
        },
        [`&.${tableRowClasses.body}`]: {
            ".MuiFormLabel-root.Mui-focused": {
                color: "#ffc107"
            },
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: "#ffc107",
            }
        },
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.common.white,
            fontSize: "16px"
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: "14px",
            color: "#616161",
            backgroundColor: "white",
        }
    }));

    const dispatch = useDispatch();
    const [userUpdateData, setUserUpdateData] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    const [editUserId, setEditUserId] = useState(null);

    const handleUserChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newFormData = { ...userUpdateData };
        newFormData[fieldName] = fieldValue;
        setUserUpdateData(newFormData);
    };

    const handleUpdateUser = async (id) => {
        const updatedUser = {
            id: editUserId,
            username: userUpdateData?.username,
            password: userUpdateData?.password,
            designation: userUpdateData?.designation
        };
        localStorage.setItem("user-Info", userUpdateData?.username)
        localStorage.setItem("designation", userUpdateData?.designation)
        await dispatch(initEditUser({ id, updatedUser }));
        await dispatch(initGetListUser());
        setEditUserId(null);
    };

    const handleUserEdit = (e, usersList) => {
        e.preventDefault();
        setEditUserId(usersList.id);
        const formValues = {
            username: usersList.username,
            password: usersList.password,
            designation: usersList.designation
        };
        setUserUpdateData(formValues);
    };

    const handleUserCancel = () => {
        setEditUserId(null);
    }

    const handleUserDelete = async (id) => {
        await dispatch(initDeleteUser(id));
        dispatch(initGetListUser(id));
    }

    return (
        (isUsersDataFetching ?
            <CircularProgress sx={{ color: "#ffc107" }} />
            :
            <Box>
                <Paper>
                    <TableContainer sx={{
                        ".MuiFormLabel-root.Mui-focused": {
                            color: "#ffb300"
                        },
                        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                            borderColor: "#ffb300",
                        }
                    }}>
                        <FormControl>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell > Username </StyledTableCell>
                                        <StyledTableCell > Password </StyledTableCell>
                                        <StyledTableCell > Designation </StyledTableCell>
                                        <StyledTableCell > Action </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {usersList && usersList
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((user) => (
                                            <TableRow key={user.id}>
                                                <Fragment>
                                                    {editUserId === user.id ? (
                                                        <UserEditTableRow
                                                            userUpdateData={userUpdateData}
                                                            setUserUpdateData={setUserUpdateData}
                                                            handleUserChange={handleUserChange}
                                                            handleUserCancel={handleUserCancel}
                                                            user={user}
                                                            handleUpdateUser={handleUpdateUser}
                                                        />
                                                    ) : (
                                                        <UserRowList
                                                            user={user}
                                                            handleUserDelete={handleUserDelete}
                                                            handleUserCancel={handleUserCancel}
                                                            handleUserEdit={handleUserEdit}
                                                            StyledTableCell={StyledTableCell}
                                                        />
                                                    )}
                                                </Fragment>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </FormControl>
                    </TableContainer>
                    <TablePagination
                        component="div"
                        rowsPerPageOptions={[5, 10, 25]}
                        count={usersList.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        sx={{ color: "#ffa000" }}
                    />
                </Paper >
            </Box >
        )
    );
};

export default TableList;