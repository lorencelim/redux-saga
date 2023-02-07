import { Box, FormControl, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TablePagination, TableRow, Toolbar, Typography } from '@mui/material';
import React, { useState, Fragment } from 'react';
import axios from '../../../app/api/axios';
import EdiTableRow from '../EditTruck/EditTableRow';
import TruckRowList from './TruckRowList';

const TableList = ({ trucks, handleDelete, setTrucks }) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.common.white,
            fontSize: "16px"
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: "29px",color: "#616161"
        },
    }));

    const [truckUpdateData, setTruckUpdateData] = useState({
        truck_plate: "",
        truck_type: "",
        cargo_type: "",
        driver: "",
        price: "",
        dimension: "",
        parking_address: "",
        production_year: "",
        status: ""
    });

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
    }

    const handleUpdateTruck = async (id) => {
        const updatedTruck = {
            id: editTruckId,
            truck_plate: truckUpdateData.truck_plate,
            truck_type: truckUpdateData.truck_type,
            cargo_type: truckUpdateData.cargo_type,
            driver: truckUpdateData.driver,
            price: truckUpdateData.price,
            dimension: truckUpdateData.dimension,
            parking_address: truckUpdateData.parking_address,
            production_year: truckUpdateData.production_year,
            status: truckUpdateData.status
        }
        try {
            const response = await axios.put(`/trucks/${id}`, updatedTruck);
            setTrucks(trucks.map(
                truck => truck.id === id ?
                    { ...response.data } : truck));
            setEditTruckId(null);
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }


    const handleTruckEdit = (e, truck) => {
        e.preventDefault();
        setEditTruckId(truck.id);

        const formValues = {
            truck_plate: truck.truck_plate,
            truck_type: truck.truck_type,
            cargo_type: truck.cargo_type,
            driver: truck.driver,
            price: truck.price,
            dimension: truck.dimension,
            parking_address: truck.parking_address,
            production_year: truck.production_year,
            status: truck.status
        };
        setTruckUpdateData(formValues);
    };

    const handleTruckCancel = () => {
        setEditTruckId(null);
    };

    return (

        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <FormControl>
                    <TableContainer sx={{width: "95%", alignSelf:"center"}}>
                        <Table trucks={trucks}>
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
                                {trucks
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map(truck => (
                                        <TableRow key={truck.id}>
                                            <Fragment>
                                                {editTruckId === truck.id ? (
                                                    <EdiTableRow
                                                        truckUpdateData={truckUpdateData}
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
                                                    />
                                                )}
                                            </Fragment>
                                        </TableRow>
                                    ))}
                            </TableBody>
                            <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component="div"
                                    count={trucks.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    sx={{ color: "#ffa000", width:"170%", padding:0}}
                                />
                        </Table>
                    </TableContainer>
                </FormControl>
            </Paper>
        </Box>
    )
}

export default TableList;