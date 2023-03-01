import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import CustomInputTruck from "./CustomInputTruck";
import CustomSelectTruck from "./CustomSelectTruck";
import CustomMultiSelect from "./CustomMultiSelect";
import CustomTextCounter from "./CustomTextCounter";
import { AddTruckSchema } from "./AddTruckSchema";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Button, FormControl, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { initSaveTrucksValue, initSaveTrucksValueSuccessfull } from "../../../containers/truck/addTruck/store/actions";
import { useDispatch, useSelector } from "react-redux";
import { initGetListCargo } from "../../../containers/cargo/cargoList/store/actions";
import { initGetListDriver } from "../../../containers/driver/driverList/store/actions";

const AddTruck = ({ theme }) => {
    const [truckPostSuccess, setTruckPostSuccess] = useState(false);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.AddTrucksReducer);
    const [truck, setTruck] = useState("");
    // console.log(success)
    const { cargoList } = useSelector(state => state.CargoListReducer);
    const cargoTypes = cargoList;
    const { driverList } = useSelector(state => state.DriverListReducer);
    const drivers = driverList;

    useEffect(() => {
        dispatch(initGetListCargo());
        dispatch(initGetListDriver());
    }, [dispatch])

    useEffect(() => {
        if (success) {
            setTruck("");
            dispatch(initSaveTrucksValueSuccessfull(false));
        }
    }, [success])

    const handleSubmit = async () => {
        truck.cargo_type = truck.cargo_type.join(", ");
        await dispatch(initSaveTrucksValue(truck));
        setTruckPostSuccess(true)
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                align="center"
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ p: 2, mt: 4 }}

            >
                <Formik
                    initialValues={{
                        truck_plate: "",
                        cargo_type: "",
                        driver: "",
                        truck_type: "",
                        dimension: "",
                        parking_address: "",
                        production_year: "",
                        status: ""
                    }}
                    validationSchema={AddTruckSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Grid sx={{ mt: 1, width: 0.6 }} >
                            <Paper elevation={2} sx={{ borderRadius: "16px" }}>
                                <Box sx={{ display: "flex", alignSelf: "center" }}>
                                    <Button onClick={() => { navigate(`/${localStorage.getItem("user-Info")}/TruckManagement`)}}>
                                        <ArrowBackIos />
                                    </Button>
                                </Box>
                                <Typography variant="h4" align="center" sx={{ color: "#ff6f00", pt: 2 }} >
                                    Add Truck Details
                                </Typography>
                                <Form>
                                    <FormControl
                                        sx={{
                                            ".MuiFormLabel-root.Mui-focused": {
                                                color: "#ffb300"
                                            },
                                            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                                                borderColor: "#ffb300",
                                            },
                                            "& .MuiFormHelperText-root": {
                                                color: "red"
                                            },
                                            width: 0.9,
                                            mt: 1,
                                            mr: 2.3,
                                            align: "center"
                                        }}
                                    >
                                        <Field
                                            component={CustomInputTruck}
                                            name="truck_plate"
                                            type="text"
                                            label="Truck Plate"
                                            setTruck={setTruck}
                                            truck={truck}
                                        />
                                        <Field
                                            component={CustomMultiSelect}
                                            name="cargo_type"
                                            options={cargoTypes}
                                            placeholder="Cargo Type"
                                            setTruck={setTruck}
                                            truck={truck}
                                        />
                                        <Field
                                            component={CustomSelectTruck}
                                            name="driver"
                                            options={drivers}
                                            placeholder="Driver"
                                            setTruck={setTruck}
                                            truck={truck}
                                        />
                                        <Field
                                            component={CustomInputTruck}
                                            name="truck_type"
                                            type="text"
                                            label="Truck Type"
                                            setTruck={setTruck}
                                            truck={truck}
                                        />
                                        <Field
                                            component={CustomInputTruck}
                                            name="dimension"
                                            type="text"
                                            label="Dimension"
                                            setTruck={setTruck}
                                            truck={truck}
                                        />
                                        <Field
                                            component={CustomTextCounter}
                                            name="parking_address"
                                            label="Parking"
                                            truck={truck}
                                            setTruck={setTruck}
                                        />
                                        <Field
                                            component={CustomInputTruck}
                                            name="production_year"
                                            type="text"
                                            label="Production Year"
                                            setTruck={setTruck}
                                            truck={truck}
                                        />
                                        <Field
                                            component={CustomInputTruck}
                                            name="status"
                                            type="text"
                                            label="Status"
                                            setTruck={setTruck}
                                            truck={truck}
                                        />
                                        <Button
                                            disabled={isSubmitting}
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            sx={{
                                                my: 4,
                                                ml: "8px",
                                                width: 1,
                                                bgcolor: "#ff8f00",
                                                "&:hover": {
                                                    backgroundColor: "#ff6f00"
                                                }
                                            }}>
                                            Add Truck
                                        </Button>
                                    </FormControl>
                                </Form>
                            </Paper>
                        </Grid>
                    )}
                </Formik>
                {
                    truckPostSuccess ?
                        (
                            <Navigate to={`/${localStorage.getItem("user-Info")}/TruckManagement`} />
                        ) : (
                            null
                        )
                }
            </Grid >
        </ThemeProvider>
    );
};

export default AddTruck