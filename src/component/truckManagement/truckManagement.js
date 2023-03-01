import { useEffect } from "react";
import TableList from "./TableList";
import { useState } from "react";
import SearchTruck from "./SearchTruck";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initGetListTruck } from "../../containers/truck/truckList/store/actions";

const TruckManagement = ({ theme }) => {
  const dispatch = useDispatch();
  const { trucksList, isTrucksDataFetching } = useSelector(state => state.TrucksListReducer);
  const [rerender, setRerender] = useState("");
  const [search, setSearch] = useState("");
  const searchKeys = [
    "truck_plate",
    "truck_type",
    "cargo_type",
    "driver",
    "dimension",
    "parking_address",
    "production_year",
    "status"
  ]



  useEffect(() => {
    dispatch(initGetListTruck());
    setRerender(Math.random());
  }, [])

  return (
    (isTrucksDataFetching ? (
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 1, height:"90vh"}}
    >
      <CircularProgress sx={{ color: "#ffc107" }} />
      </Grid>
    ) : (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 1 }}
    >
      <Grid item sx={{ my: 2 }}>
        <Typography variant="h3" sx={{ color: "#ff6f00" }}>Truck Management</Typography>
      </Grid>
      <Grid item sx={{ my: 2 }}>
        <SearchTruck
          search={search}
          setSearch={setSearch}
        />
      </Grid>
      <Grid item>
        {trucksList.length ? (
          <TableList
            trucksList={trucksList.filter((truck) =>
              searchKeys.some((searchKey) => truck[searchKey].toLowerCase().includes(search.toLowerCase())))}
            isTrucksDataFetching={isTrucksDataFetching}
            theme={theme}
          />
        ) : null}
      </Grid>
      <Grid item sx={{ my: 2 }}>
        <Link style={{ textDecoration: "none" }} to={`/${localStorage.getItem("user-Info")}/AddTruck`}>
          <Button
            variant="contained"
            color="primary"
            theme={theme}
            sx={{
              "&:hover": {
                backgroundColor: "#ff6f00"
              }
            }}
          >
            Add Truck
          </Button>
        </Link>
      </Grid>
    </Grid>
    ))
  );
};


export default TruckManagement;
