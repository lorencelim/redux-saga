import {
    Box, CircularProgress, FormControl,
    Paper, styled, Table, TableBody,
    TableCell, tableCellClasses, TableContainer,
    tableContainerClasses, TableHead,
    TablePagination, TableRow, tableRowClasses
} from "@mui/material";
import React, { useState, Fragment } from "react";
import EdiTableRow from "./EditTruck/EditTableRow";
import TruckRowList from "./TruckRowList";
import { useDispatch } from "react-redux";
import { initEditTruck } from "../../containers/truck/editTruck/store/actions";
import { initDeleteTruck } from "../../containers/truck/deleteTruck/store/actions";
import { initGetListTruck } from "../../containers/truck/truckList/store/actions";

const TableList = ({ trucksList, isTrucksDataFetching }) => {
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
            },
        },
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.common.white,
            fontSize: "16px"
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: "14px",
            color: "#616161",
            backgroundColor: "white"
        }
    }));

    const dispatch = useDispatch();
    const [truckUpdateData, setTruckUpdateData] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    const [editTruckId, setEditTruckId] = useState(null);

    const handleTruckChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newFormData = { ...truckUpdateData };
        newFormData[fieldName] = fieldValue;
        setTruckUpdateData(newFormData);
    };

    const handleUpdateTruck = async (id) => {
        const updatedTruck = {
            id: editTruckId,
            truck_plate: truckUpdateData?.truck_plate,
            truck_type: truckUpdateData?.truck_type,
            cargo_type: truckUpdateData?.cargo_type,
            driver: truckUpdateData?.driver,
            price: truckUpdateData?.price,
            dimension: truckUpdateData?.dimension,
            parking_address: truckUpdateData?.parking_address,
            production_year: truckUpdateData?.production_year,
            status: truckUpdateData?.status
        };
        await dispatch(initEditTruck({ updatedTruck, id }));
        await dispatch(initGetListTruck());
        setEditTruckId(null);
    };


    const handleTruckEdit = (e, trucksList) => {
        e.preventDefault();
        setEditTruckId(trucksList.id);
        const formValues = {
            truck_plate: trucksList.truck_plate,
            truck_type: trucksList.truck_type,
            cargo_type: trucksList.cargo_type,
            driver: trucksList.driver,
            dimension: trucksList.dimension,
            parking_address: trucksList.parking_address,
            production_year: trucksList.production_year,
            status: trucksList.status
        };
        setTruckUpdateData(formValues);
    };

    const handleTruckCancel = () => {
        setEditTruckId(null);
    }

    const handleDelete = async (id) => {
        await dispatch(initDeleteTruck(id));
        dispatch(initGetListTruck(id));
    }

    return (
        (isTrucksDataFetching ?
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
                                        <StyledTableCell > Truck Plate </StyledTableCell >
                                        <StyledTableCell > Cargo Type </StyledTableCell >
                                        <StyledTableCell > Driver </StyledTableCell >
                                        <StyledTableCell > Truck Type </StyledTableCell >
                                        <StyledTableCell > Dimension </StyledTableCell >
                                        <StyledTableCell > Parking Address </StyledTableCell >
                                        <StyledTableCell > Production Year </StyledTableCell >
                                        <StyledTableCell > Status </StyledTableCell >
                                        <StyledTableCell > Action </StyledTableCell >
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {trucksList && trucksList
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((truck) => (
                                            <TableRow key={truck.id}>
                                                <Fragment>
                                                    {editTruckId === truck.id ? (
                                                        <EdiTableRow
                                                            truckUpdateData={truckUpdateData}
                                                            setTruckUpdateData={setTruckUpdateData}
                                                            handleTruckChange={handleTruckChange}
                                                            handleTruckCancel={handleTruckCancel}
                                                            truck={truck}
                                                            handleUpdateTruck={handleUpdateTruck}
                                                        />
                                                    ) : (
                                                        <TruckRowList
                                                            truck={truck}
                                                            handleDelete={handleDelete}
                                                            handleTruckCancel={handleTruckCancel}
                                                            handleTruckEdit={handleTruckEdit}
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
                        count={trucksList.length}
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