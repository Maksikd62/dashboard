import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  TablePagination,
  Box,
  Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {Link} from "react-router-dom";

const users = [
  {
    id: 1,
    userName: "admin",
    email: "admin@dash.com",
    role: "admin",
    name: "admin",
    surname: "admin",
  },
  {
    id: 2,
    userName: "user1",
    email: "user1@dash.com",
    role: "user",
    name: "userName1",
    surname: "userSurname1",
  },
  {
    id: 3,
    userName: "user2",
    email: "user2@dash.com",
    role: "user",
    name: "userName2",
    surname: "userSurname2",
  },
  {
    id: 4,
    userName: "user3",
    email: "user3@dash.com",
    role: "user",
    name: "userName3",
    surname: "userSurname3",
  },
  {
    id: 5,
    userName: "user4",
    email: "user4@dash.com",
    role: "user",
    name: "userName4",
    surname: "userSurname4",
  },
  {
    id: 6,
    userName: "user5",
    email: "user5@dash.com",
    role: "user",
    name: "userName5",
    surname: "userSurname5",
  },
  {
    id: 7,
    userName: "user6",
    email: "user6@dash.com",
    role: "user",
    name: "userName6",
    surname: "userSurname6",
  },
  {
    id: 8,
    userName: "user7",
    email: "user7@dash.com",
    role: "user",
    name: "userName7",
    surname: "userSurname7",
  },
  {
    id: 9,
    userName: "user8",
    email: "user8@dash.com",
    role: "user",
    name: "userName8",
    surname: "userSurname8",
  },
  {
    id: 10,
    userName: "user9",
    email: "user5@dash.com",
    role: "user",
    name: "userName9",
    surname: "userSurname9",
  },
  {
    id: 11,
    userName: "user10",
    email: "user10@dash.com",
    role: "user",
    name: "userName10",
    surname: "userSurname10",
  },
];

const UsersPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container sx={{ mt: 2 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Id
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                User name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Role
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Full name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.userName}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.role}</TableCell>
                  <TableCell align="center">{`${item.name} ${item.surname}`}</TableCell>
                  <TableCell align="center">
                    <Link
                      to={`createuser?userId=${item.id}&email=${item.email}`}
                    >
                      <EditIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button style={{ border: "1px solid", marginTop: "10px" }}>
        Add user
      </Button>
      <Button
        style={{ border: "1px solid", marginTop: "10px", marginLeft: "10px" }}
      >
        Delete user
      </Button>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <TablePagination
          component="div"
          count={users.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 15, 25]}
          labelDisplayedRows={({ from, to, count, page }) =>
            `Page ${page + 1} of ${Math.ceil(count / rowsPerPage)}`
          }
        />
      </Box>
    </Container>
  );
};

export default UsersPage;
