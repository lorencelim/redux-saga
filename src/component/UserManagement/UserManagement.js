import { useEffect } from "react";
import TableList from "./TableList";
import { useState } from "react";
import SearchUser from "./SearchUser";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { initGetListUser } from "../../containers/user/userList/store/actions";

const UserManagement = ({ theme }) => {

  const dispatch = useDispatch();
  const { usersList, isUsersDataFetching } = useSelector(state => state.UsersListReducer);
  const [search, setSearch] = useState("");
  const searchKeys = [
    "username",
    "designation"
  ]

  useEffect(() => {
    dispatch(initGetListUser());
  }, [dispatch])

  return (
    (isUsersDataFetching ? (
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
          />
        ) : null}
      </Grid>
    </Grid>
    ))
  );
};


export default UserManagement;
