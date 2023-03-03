import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Button, FormControl, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { initSaveCargoValue, initSaveCargoValueSuccessfull } from "../../../containers/cargo/addCargo/store/actions";
import CustomInputCargo from "./CustomInputCargo";

const AddCargo = ({ theme }) => {
    const [cargoPostSuccess, setCargoPostSuccess] = useState(false);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.AddCargoReducer);
    const [cargo, setCargo] = useState("");
    // console.log(success)
    
    useEffect(() => {
        if (success) {
            setCargo("");
            dispatch(initSaveCargoValueSuccessfull(false));
        }
    }, [success])

    const handleSubmit = async() => {
        cargo.label=(cargo.value);
        await dispatch(initSaveCargoValue(cargo));
        setCargoPostSuccess(true)
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
                        value: ""
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Grid sx={{ mt: 1, width: 0.6 }} >
                            <Paper elevation={2} sx={{ borderRadius: "16px" }}>
                                <Box sx={{ display: "flex", alignSelf: "center" }}>
                                    <Button onClick={() => {navigate(-1)}}>
                                        <ArrowBackIos />
                                    </Button>
                                </Box>
                                <Typography variant="h4" align="center" sx={{ color:"#ff6f00", pt: 2 }} >
                                    Add Cargo Details
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
                                            component={CustomInputCargo}
                                            name="value"
                                            label="Cargo Type"
                                            setCargo={setCargo}
                                            cargo={cargo}
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
                                            Add Cargo Type
                                        </Button>
                                    </FormControl>
                                </Form>
                            </Paper>
                        </Grid>
                    )}
                </Formik>
                {
                    cargoPostSuccess ?
                        (
                            <Navigate to={`/${localStorage.getItem("user-Info")}/CargoManagement`} />
                        ) : (
                            null
                        )
                }
            </Grid >
        </ThemeProvider>
    );
};

export default AddCargo