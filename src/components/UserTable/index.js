import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { Edit as EditIcon, Block as BanIcon } from '@mui/icons-material';
import { dummyUsers } from '../../data/dummyUsers';
import "./index.css";

const UserTable = () => {
  return (
    <TableContainer className="tableContainer">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  className="button"
                  aria-label="edit"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  className="button"
                  aria-label="ban"
                >
                  <BanIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
