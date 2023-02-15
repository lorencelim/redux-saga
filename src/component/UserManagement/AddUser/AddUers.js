import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import CustomInputTruck from './CustomInputTruck';
import CustomSelectTruck from './CustomSelectTruck';
import CustomMultiSelect from './CustomMultiSelect';
import CustomTextCounter from './CustomTextCounter';
import { AddTruckSchema } from './AddTruckSchema';
import axios from '../../../app/api/axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, Grid, Paper, ThemeProvider, Typography } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';

const AddTruck = ({ setTrucks, cargoType, drivers, theme }) => {
    const [truckPostSuccess, setTruckPostSuccess] = useState(false);
    let navigate = useNavigate();
    const addTruckSubmit = async (values) => {
        values.cargo_type = values.cargo_type.map(item => item.value).join(", ")
        values.driver = values.driver.value
        await new Promise((resolve) => setTimeout(resolve, 100));
        console.log(values);
        setTrucks(await axios.post('/trucks', values));
        setTruckPostSuccess(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                align='center'
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ bgcolor: "#ffb300", p: 2 }}
                style={{ minHeight: '100vh' }}
            >
                <Formik
                    initialValues={{
                        truck_plate: "",
                        cargo_type: "",
                        driver: "",
                        truck_type: "",
                        price: "",
                        dimension: "",
                        parking_address: "",
                        production_year: "",
                        status: ""
                    }}
                    validationSchema={AddTruckSchema}
                    onSubmit={addTruckSubmit}
                >
                    {({ isSubmitting }) => (
                        <Grid sx={{ mt: 1, width: 0.7 }} >
                            <Paper elevation={2} sx={{ borderRadius: "16px" }}>
                                <Box sx={{ display: "flex", alignSelf: "start", pt: 2 }}>
                                    <Button onClick={() => { navigate("/TruckManagement"); }}>
                                        <ArrowBackIos />
                                    </Button>
                                </Box>
                                <Typography variant="h4" align='center' sx={{ pt: 2 }} >
                                    Add Truck Details
                                </Typography>
                                <Form>
                                    <FormControl
                                        sx={{
                                            ".MuiFormLabel-root.Mui-focused": {
                                                color: '#ffb300'
                                            },
                                            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                                borderColor: '#ffb300',
                                            },
                                            '& .MuiFormHelperText-root': {
                                                color: "#d50000"
                                            },
                                            width: 0.9,
                                            mt: 1,
                                            mr: 2.3,
                                            align: "center"
                                        }}

                                    >
                                        <CustomInputTruck
                                            name="truck_plate"
                                            type="text"
                                            placeholder="Truck Plate"
                                        />
                                        <Field
                                            component={CustomMultiSelect}
                                            name="cargo_type"
                                            options={cargoType}
                                            placeholder="Cargo Type"
                                        />
                                        <Field
                                            component={CustomSelectTruck}
                                            name="driver"
                                            options={drivers}
                                            placeholder="Driver"
                                        />
                                        <CustomInputTruck
                                            name="truck_type"
                                            type="text"
                                            placeholder="Truck Type"
                                        />
                                        <CustomInputTruck
                                            name="price"
                                            type="text"
                                            placeholder="Price"
                                        />
                                        <CustomInputTruck
                                            name="dimension"
                                            type="text"
                                            placeholder="Dimension"
                                        />
                                        <Field
                                            component={CustomTextCounter}
                                            name="parking_address"
                                            placeholder="Parking"
                                        />
                                        <CustomInputTruck
                                            name="production_year"
                                            type="text"
                                            placeholder="Production Year"
                                        />
                                        <CustomInputTruck
                                            name="status"
                                            type="text"
                                            placeholder="Status"
                                        />
                                        <Button
                                            disabled={isSubmitting}
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            sx={{
                                                mt: "16px",
                                                ml: "8px",
                                                mb: "16px",
                                                width: 1,
                                                bgcolor: "#ff8f00",
                                                '&:hover': {
                                                    backgroundColor: '#ff6f00'
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
                            <Navigate to={"/TruckManagement"} />
                        ) : (
                            null
                        )
                }
            </Grid >
        </ThemeProvider>
    )
}

export default AddTruck