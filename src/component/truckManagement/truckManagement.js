import TableList from "./AddTruck/TableList";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchTruck from "./SearchTruck"


const TruckManagement = ({ trucks, handleDelete
}) => {
    const [search, setSearch] = useState('');

    // useEffect(() => {
    //     const filteredResults = trucks.filter((truck) => {
    //         ((truck.truck_plate).toLowerCase()).includes(serach.toLowerCase())

    //         setSearchResults(filteredResults.reverse());
    //     }, [trucks, search])

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
                        trucks={trucks.filter(truck => (
                            (truck.truck_plate).toLowerCase()).includes(search.toLowerCase()))}
                        handleDelete={handleDelete}
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