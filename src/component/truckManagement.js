// import { iteratorSymbol } from "immer/dist/internal";
import React from "react";
// import api from '../app/api/dbapi'
import TableList from "../TableList";
import AddItem from "../AddItem";


const TruckManagement = ({items, handleCheck, handleDelete}) => {

    return (
        <main>
            <AddItem />
            {items.length ? (
                <TableList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
            ) : (
                <p>Your list is empty</p>
            )}


            {/* <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox" checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <button>This is button</button>
                    </li>
                ))}
            </ul> */}
        </main>
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








export default TruckManagement;