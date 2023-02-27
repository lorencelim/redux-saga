import { 
    Box, CircularProgress, FormControl, 
    Paper, styled, Table, 
    TableBody, TableCell, tableCellClasses, 
    TableContainer, tableContainerClasses, TableHead, 
    TablePagination, TableRow, tableRowClasses 
} from "@mui/material";
import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { initGetListCargo } from "../../containers/cargo/cargoList/store/actions";
import { initDeleteCargo } from "../../containers/cargo/deleteCargo/store/actions";
import { initEditCargo } from "../../containers/cargo/editCargo/store/actions";
import CargoRowList from "./CargoRowList";
import CargoEditTableRow from "./EditCargo.js/CargoEditTableRow";

const TableList = ({ cargoList, isCargoDataFetching }) => {

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
    const [cargoUpdateData, setCargoUpdateData] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    const [editCargoId, setEditCargoId] = useState(null);

    const handleCargoChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newFormData = { ...cargoUpdateData };
        newFormData[fieldName] = fieldValue;
        setCargoUpdateData(newFormData);
    };

    const handleUpdateCargo = async(id) => {
        const updatedCargo = {
            id: editCargoId,
            value: cargoUpdateData?.value,
            label: cargoUpdateData?.value
        };
        await dispatch(initEditCargo({ id, updatedCargo }));
        await dispatch(initGetListCargo({ id, updatedCargo }));
        setEditCargoId(null);
    };

    const handleCargoEdit = (e, cargoList) => {
        e.preventDefault();
        setEditCargoId(cargoList.id);
        const formValues = {
            value: cargoList.value,
        };
        setCargoUpdateData(formValues);
    };

    const handleCargoCancel = () => {
        setEditCargoId(null);
    }

    const handleCargoDelete = async(id) => {
        await dispatch(initDeleteCargo (id));
        await dispatch(initGetListCargo(id));
    }

    return (
        (isCargoDataFetching ?
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
                                        <StyledTableCell > Cargo Type </StyledTableCell>
                                        <StyledTableCell > Action </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cargoList && cargoList
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((cargo) => (
                                            <TableRow key={cargo.id}>
                                                <Fragment>
                                                    {editCargoId === cargo.id ? (
                                                        <CargoEditTableRow
                                                            cargoUpdateData={cargoUpdateData}
                                                            setCargoUpdateData={setCargoUpdateData}
                                                            handleCargoChange={handleCargoChange}
                                                            handleCargoCancel={handleCargoCancel}
                                                            cargo={cargo}
                                                            handleUpdateCargo={handleUpdateCargo}
                                                        />
                                                    ) : (
                                                        <CargoRowList
                                                            cargo={cargo}
                                                            handleCargoDelete={handleCargoDelete}
                                                            handleCargoCancel={handleCargoCancel}
                                                            handleCargoEdit={handleCargoEdit}
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
                        rowsPerPageOptions={[5, 10, 25]}
                        count={cargoList.length}
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