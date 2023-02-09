import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import CustomInputTruck from './CustomInputTruck';
import CustomSelectTruck from './CustomSelectTruck';
import CustomMultiSelect from './CustomMultiSelect';
import CustomTextCounter from './CustomTextCounter';
import { AddTruckSchema } from './AddTruckSchema';
import axios from '../../../app/api/axios';
import { Navigate } from 'react-router-dom';
import { Grid } from '@mui/material';


const AddTruck = ({ setTrucks }) => {
    const [truckPostSuccess, setTruckPostSuccess] = useState(false);

    const cargoType = [
        { value: "Computer", label: "Computer" },
        { value: "Electronics", label: "Electronics" },
        { value: "Vegetables", label: "Vegetables" },
        { value: "Kid Toys", label: "Kid Toys" },
        { value: "Chairs", label: "Chairs" },
        { value: "Tables", label: "Tables" },
        { value: "Fruits", label: "Fruits" },
        { value: "Wires", label: "Wires" },
        { value: "Ices", label: "Ices" },
        { value: "Animals", label: "Animals" },
        { value: "Masks", label: "Masks" }
    ];

    const driver = [
        { value: "Nguyễn Văn A", label: "Nguyễn Văn A" },
        { value: "Nguyễn Văn B", label: "Nguyễn Văn B" },
        { value: "Nguyễn Văn C", label: "Nguyễn Văn C" }
    ];


    const addTruckSubmit = async (values) => {
        values.cargo_type = values.cargo_type.map(item => item.value).join(", ")
        values.driver = values.driver.map(item => item.value).pop("")
        await new Promise((resolve) => setTimeout(resolve, 100));
        console.log(values);
        setTrucks(await axios.post('/trucks', values));
        setTruckPostSuccess(true);
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <h2>Add Truck Details</h2><br/>
            <Formik initialValues={{
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
                    <Form>
                        <CustomInputTruck
                            label="Truck Plate"
                            name="truck_plate"
                            type="text"
                            placeholder="Truck Plate"
                        />
                        <Field
                            component={CustomMultiSelect}
                            name="cargo_type"
                            options={cargoType}
                        />
                        <Field
                            component={CustomSelectTruck}
                            name="driver"
                            options={driver}
                        />
                        <CustomInputTruck
                            label="Truck Type"
                            name="truck_type"
                            type="text"
                            placeholder="Truck Type"
                        />
                        <CustomInputTruck
                            label="Price"
                            name="price"
                            type="text"
                            placeholder="Price"
                        />
                        <CustomInputTruck
                            label="Dimension"
                            name="dimension"
                            type="text"
                            placeholder="Dimension"
                        />
                        <Field
                            component={CustomTextCounter}
                            label="Parking Address"
                            name="parking_address"
                            placeholder="Parking"
                        />
                        <CustomInputTruck
                            label="ProductionYear"
                            name="production_year"
                            type="text"
                            placeholder="Production Year"
                        />
                        <CustomInputTruck
                            label="Status"
                            name="status"
                            type="text"
                            placeholder="Status"
                        />
                        <button disabled={isSubmitting} type="submit">
                            Add Truck
                        </button>
                    </Form>
                )}
            </Formik>
            {truckPostSuccess ?
                (
                    <Navigate to={"/TruckManagement"} />
                ) : (
                    null
                )}
        </Grid>
    )
}

export default AddTruck