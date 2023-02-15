// import { useEffect } from "react";
// import TableList from "./TableList";
// import { useState } from "react";
// import SearchTruck from "./SearchTruck";
// import axios from "../../app/api/axios";
// import { Button, Grid } from "@mui/material";
// import { Link } from "react-router-dom";

// const UserManagement = ({ users, setUsers, theme
// }) => {

//   const [search, setSearch] = useState('');
//   const searchKeys = [
//     "user",
//     "designation"
//   ]

//   const logout = () => {
//     localStorage.clear();
//   }

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('/users');
//         setUsers(response.data);
//       } catch (err) {
//         if (err.response) {
//           console.log(err.response.data);
//           console.log(err.response.status);
//           console.log(err.response.headers);
//         } else {
//           console.log(`Error: ${err.message}`)
//         }
//       }
//     }
//     setTimeout(() => {
//       fetchUsers();
//     }, 100)
//   }, [setUsers])

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`users/${id}`);
//       const listUsers = users.filter(user => user.id !== id);
//       setUsers(listUsers);
//     } catch (err) {
//       console.log(`Error: ${err.message}`);
//     }
//   }

//   return (
//     <Grid
//       container
//       spacing={0}
//       direction="column"
//       alignItems="center"
//       justifyContent="center"
//       sx={{ mt: 1 }}
//     >
//       <Grid item>
//         <Link style={{ textDecoration: 'none' }} to="/SignIn">
//           <Button
//             variant="outlined"
//             color="primary"
//             theme={theme}
//             sx={{
//               mt: 1,
//               '&:hover': {
//                 color: '#ff6f00'
//               }
//             }}
//             onClick={logout}
//           >
//             Sign Out
//           </Button>
//         </Link>
//       </Grid>
//       <Grid item>
//         <Link style={{ textDecoration: 'none' }} to="/AddUser">
//           <Button
//             variant="contained"
//             color="primary"
//             theme={theme}
//             sx={{
//               m: 1,
//               '&:hover': {
//                 backgroundColor: '#ff6f00'
//               }
//             }}
//           >
//             Add User
//           </Button>
//         </Link>
//       </Grid>
//       <Grid item>
//         <SearchTruck
//           search={search}
//           setSearch={setSearch}
//         />
//       </Grid>
//       <Grid item>
//         {users.length ? (
//           <TableList
//             users={users.filter((user) =>
//               searchKeys.some(searchKey => user[searchKey].toLowerCase().includes(search.toLowerCase())))}
//             handleDelete={handleDelete}
//             setUsers={setUsers}
//             theme={theme}
//             cargoType={cargoType}
//             drivers={drivers}
//           />
//         ) : null}
//       </Grid>
//     </Grid>
//   )
// }

// export default UserManagement;