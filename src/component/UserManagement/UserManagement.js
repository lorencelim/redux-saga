import { useEffect } from "react";
import TableList from "./TableList";
import { useState } from "react";
import SearchUser from "./SearchUser";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initGetListUser } from "../../containers/user/userList/store/actions";

const UserManagement = ({ cargoTypes, drivers, theme
}) => {

  const dispatch = useDispatch();
  const { usersList, isUsersDataFetching } = useSelector(state => state.UsersListReducer);
  const [search, setSearch] = useState('');
  const searchKeys = [
    "username",
    "designation"
  ]

  useEffect(() => {
    dispatch(initGetListUser());
  }, [])

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 1 }}
    >
      <Grid item sx={{ my: 2 }}>
        <Typography variant="h3" sx={{ color: "#ff6f00" }}>User Management</Typography>
      </Grid>
      <Grid item sx={{ my: 2 }}>
        <SearchUser
          search={search}
          setSearch={setSearch}
        />
      </Grid>
      <Grid item>
        {usersList.length ? (
          <TableList
            usersList={usersList.filter((user) =>
              searchKeys.some((searchKey) => user[searchKey].toLowerCase().includes(search.toLowerCase())))}
            isUsersDataFetching={isUsersDataFetching}
            theme={theme}
            cargoTypes={cargoTypes}
            drivers={drivers}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};


export default UserManagement;
