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
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useAction } from "../../hooks/useAction";

const UsersPage = () => {
  const users = useSelector((state) => state.usersReducer.users);
  const { deleteUser } = useAction();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id) => {
    deleteUser(id);
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
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Delete
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
                      to={`createuser?userId=${item.id}&email=${item.email}&userName=${item.userName}&name=${item.name}&surname=${item.surname}&role=${item.role}`}
                    >
                      <EditIcon />
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <Button onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button style={{ border: "1px solid", marginTop: "10px" }}>
        Add user
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
