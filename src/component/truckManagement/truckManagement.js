import { useEffect } from "react";
import TableList from "./TableList";
import { useState } from "react";
import SearchTruck from "./SearchTruck";
import axios from "../../app/api/axios";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const TruckManagement = ({ trucks, setTrucks, cargoType, drivers, theme
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

  const logout = () => {
    localStorage.clear();
  }

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const response = await axios.get('/trucks');
        setTrucks(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    setTimeout(() => {
      fetchTrucks();
    }, 100);
  }, [setTrucks]);

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
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 1 }}
    >
      <Grid item>
        <Link style={{ textDecoration: 'none' }} to="/SignIn">
          <Button
            variant="outlined"
            color="primary"
            theme={theme}
            sx={{
              mt: 1,
              '&:hover': {
                color: '#ff6f00'
              }
            }}
            onClick={logout}
          >
            Sign Out
          </Button>
        </Link>
      </Grid>
      <Grid item>
        <Link style={{ textDecoration: 'none' }} to="/AddTruck">
          <Button
            variant="contained"
            color="primary"
            theme={theme}
            sx={{
              m: 1,
              '&:hover': {
                backgroundColor: '#ff6f00'
              }
            }}
          >
            Add Truck
          </Button>
        </Link>
      </Grid>
      <Grid item>
        <SearchTruck
          search={search}
          setSearch={setSearch}
        />
      </Grid>
      <Grid item>
        {trucks.length ? (
          <TableList
            trucks={trucks.filter((truck) =>
              searchKeys.some(searchKey => truck[searchKey].toLowerCase().includes(search.toLowerCase())))}
            handleDelete={handleDelete}
            setTrucks={setTrucks}
            theme={theme}
            cargoType={cargoType}
            drivers={drivers}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};


export default TruckManagement;