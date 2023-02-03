import { useEffect } from "react";
import TableList from "./AddTruck/TableList";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchTruck from "./SearchTruck";
import axios from "../../app/api/axios";


const TruckManagement = ({ trucks, setTrucks
}) => {
    const [search, setSearch] = useState('');
    const searchKeys = [
        "truck_plate",
        "truck_type",
        "cargo_type",
        "driver",
        "price",
        "dimension",
        "parking_address",
        "production_year",
        "status"
    ]

    useEffect(() => {
        const fetchTrucks = async () => {
          try {
            const response = await axios.get('/trucks');
            setTrucks(response.data);
          } catch (err) {
            if (err.response) {
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            } else {
              console.log(`Error: ${err.message}`)
            }
          }
        }
        setTimeout(() => {
          fetchTrucks();
        }, 100)
      }, [])

    // useEffect(() => {
    //     const filteredResults = trucks.filter((truck) => {
    //         ((truck.truck_plate).toLowerCase()).includes(serach.toLowerCase())

    //         setSearchResults(filteredResults.reverse());
    //     }, [trucks, search])

    const handleDelete = async (id) => {
        try {
          await axios.delete(`trucks/${id}`);
          const listTrucks = trucks.filter(truck => truck.id !== id);
          setTrucks(listTrucks);
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }

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
                        trucks={trucks.filter((truck) =>
                            searchKeys.some(searchKey => truck[searchKey].toLowerCase().includes(search)))}
                        handleDelete={handleDelete}
                        setTrucks={setTrucks}
                    />
                ) : null}
            </main>
        </div>

    )
}

TruckManagement.defaultProps = {
    title: "Title"
}




export default TruckManagement;