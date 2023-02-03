import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import CustomInputTruck from './CustomInputTruck';
import CustomSelectTruck from './CustomSelectTruck';
import { AddTruckSchema } from './AddTruckSchema';
import axios from '../../../app/api/axios';
import { Navigate } from 'react-router-dom';
import CustomCheckboxTruck from './CustomCheckboxTruck';


const AddTruck = ({ setTrucks }) => {
    const [truckPostSuccess, setTruckPostSuccess] = useState(false);
    const [cargoValue, setCargoValue] = useState('');

    const  handleCargoChange = () => {
      setCargoValue(cargoValue)
    }

    const options = [
        { value: 'Computer', label: 'Computer' },
        { value: 'Electronics', label: 'Electronics' },
        { value: 'Vegetables', label: 'Vegetables' },
        { value: 'Kid Toys', label: 'Kid Toys' },
        { value: 'Chairs', label: 'Chairs' },
        { value: 'Tables', label: 'Tables' },
        { value: 'Fruits', label: 'Fruits' },
        { value: 'Wires', label: 'Wires' },
        { value: 'Ices', label: 'Ices' },
        { value: 'Animals', label: 'Animals' },
        { value: 'Masks', label: 'Masks' }
    ]


    const addTruckSubmit = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setTrucks(await axios.post('/trucks', values));
        setTruckPostSuccess(true);
    };

    return (
        <>
            <h2>Add Truck Details</h2>
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
                        <CustomCheckboxTruck
                            label="Cargo Type"
                            name="cargo_type"
                            options={options}
                        />
                            {/* <option value="">Please select cargo type</option>
                            <option value="Computer">Computer</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Kid Toys">Kid Toys</option>
                            <option value="Chairs">Chairs</option>
                            <option value="Tables">Tables</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Wires">Wires</option>
                            <option value="Ices">Ices</option>
                            <option value="Animals">Animals</option>
                            <option value="Masks">Masks</option>
                        </CustomCheckboxTruck> */}
                        <CustomSelectTruck
                            label="Driver"
                            name="driver"
                            
                        >
                            <option value="">Please select a driver</option>
                            <option value="Nguyễn Văn A">Nguyễn Văn A</option>
                            <option value="Nguyễn Văn B">Nguyễn Văn B</option>
                            <option value="Nguyễn Văn C">Nguyễn Văn C</option>
                        </CustomSelectTruck>
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
                        <CustomInputTruck
                            label="Parking"
                            name="parking_address"
                            type="text"
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
        </>
    )
}

export default AddTruck