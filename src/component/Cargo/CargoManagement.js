import { useEffect } from "react";
import TableList from "./TableList";
import { useState } from "react";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { initGetListCargo } from "../../containers/cargo/cargoList/store/actions";
import SearchCargo from "./SearchCargo";
import { Link } from "react-router-dom";

const CargoManagement = ({ theme }) => {
  const dispatch = useDispatch();
  const { cargoList, isCargoDataFetching } = useSelector(state => state.CargoListReducer);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(initGetListCargo());
  }, [dispatch])

  return (
    (isCargoDataFetching ? (
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
        <Typography variant="h3" sx={{ color: "#ff6f00" }}>Cargo Management</Typography>
      </Grid>
      <Grid item sx={{ my: 2 }}>
        <SearchCargo
          search={search}
          setSearch={setSearch}
        />
      </Grid>
      <Grid item>
        {cargoList.length ? (
          <TableList
            cargoList={cargoList.filter(item =>
              item.value.toLowerCase().includes(search.toLocaleLowerCase()))}
            isCargoDataFetching={isCargoDataFetching}
            theme={theme}
          />
        ) : null}
      </Grid>
      <Grid item sx={{ my: 2 }}>
        <Link style={{ textDecoration: "none" }} to={`/${localStorage.getItem("user-Info")}/AddCargo`}>
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
            Add Cargo
          </Button>
        </Link>
      </Grid>
    </Grid>
    ))
  );
};


export default CargoManagement;
