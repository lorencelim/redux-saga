// import { iteratorSymbol } from "immer/dist/internal";
// import api from '../app/api/dbapi'
import TableList from "./AddTruck/TableList";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchTruck from "./SearchTruck"


const TruckManagement = ({ trucks, handleDelete
}) => {
    // const TRUCKS_URL = '/trucks';
    // const [trucks, setTrucks] = useState([]);
    // const [newTruck, setNewTruck] = useState('');
    // const [fetchError, setFetchError] = useState(null);
    const [search, setSearch] = useState('');

    // useEffect(() => {
    //     const filteredResults = trucks.filter((truck) => {
    //         ((truck.truck_plate).toLowerCase()).includes(serach.toLowerCase())

    //         setSearchResults(filteredResults.reverse());
    //     }, [trucks, search])

    //     const handleSubmit = async (e) => {
    //         e.preventDefault();
    //         const id = trucks.length ? trucks[trucks.length - 1].id + 1 : 1;
    //         const newTruck = { id, truck_plate: setTruckPlate, truck_type: setTruckType, cargo_type: setCargoType, driver: setDriver, price: setPrice, dimension: setDimension, parking_address: setParkingAddress, production_year: setProductionYear }
    //         try {
    //             const response = await axios.post(TRUCKS_URL, newTruck);
    //             const allTrucks = [...trucks, response.data];
    //             setTrucks(allTrucks);
    //             setTruckPlate('');
    //             setCargoType('');
    //             setDriver('');
    //             setPrice('');
    //             setDimension('');
    //             setParkingAddress('');
    //             setProductionYear('');
    //             history.push('/');
    //         } catch (err) {
    //             console.log(`Error: ${err.message}`);
    //         }
    //     }

    // })

    return (
        <div>
            <nav>
                <button><Link to="/AddTruck"
                > Add Truck </Link>
                </button>
            </nav>
            <SearchTruck
                search={search}
                setSearch={setSearch}
            />
            <main>
                {trucks.length ? (
                    <TableList
                        trucks={trucks.filter(truck => ((truck.truck_plate).toLowerCase()).includes(search.toLowerCase()))}
                        handleDelete={handleDelete}
                    />
                ) : null}
            </main>
        </div>

    )



    // const [trucks, setTrucks] = useState([]);


    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await api.get('/trucks')
    //             setTrucks(response.data);
    //         } catch (err) {
    //             if (err.response) {
    //                 console.log(err.response.data);
    //                 console.log(err.response.status);
    //                 console.log(err.response.headers);
    //             } else {
    //                 console.log(`Error: ${err.message}`);
    //             }
    //         }
    //     }

    //     fetchPosts();
    // }, [])

    // useEffect(() => {
    //     const filteredResults = post.filter((truck) => 

    //     )
    // })


    //     const handleSubmit = async (e) => {
    //         e.preventDefault();
    //         const id = trucks.length ? trucks[trucks.length - 1].id + 1 : 1;
    //         const newTruckPlate = {id, checked: false, truckPlate};
    //         const newTruckType = {id, checked: false, truckType };
    //         const new
    //         const newTruck = {
    //             id,
    //             truck_plate: postTruckPlate,
    //             truck_type: postTruckType,
    //             cargo_type: postCargoType,
    //             price: postPrice,
    //             dimension: postDimension,
    //             parking_address: postParkingAddress,
    //             producion_year: postProduction,
    //             status: postStatus,
    //             description: postDescription
    //         }
    //         try {
    //             const response = await api.post("/trucks", newTruck);
    //             const allTrucks = [...trucks, response.data];
    //             setTrucks(allTrucks);
    //             setTruckType("");
    //             setCargoType("");
    //             setPostPrice("");
    //             setPostDimension("");
    //             setPostParkingAddress("");
    //             setPostProduction("");
    //             setPostStatus("");
    //             setPostDescription("");
    //             history.pushState("/");
    //         } catch (err) {
    //             console.log("Error: ${err.message");
    //         }
    //     }

    //     const handleDelete = async (id) => {
    //         const trucksList = trucks.filter(truck => truck.id !== id);
    //         setTrucks(trucksList);
    //         history.push("/");
    //     } catch (err) {
    //         console.log(`Error: ${err.message}`;)
    //     }
    // }


}


TruckManagement.defaultProps = {
    title: "Title"
}




export default TruckManagement;