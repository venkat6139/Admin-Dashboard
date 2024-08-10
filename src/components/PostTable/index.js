import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { Delete as DeleteIcon, VisibilityOff as HideIcon } from '@mui/icons-material';
import { dummyPosts } from '../../data/dummyPosts';
import "./index.css";

const PostTable = () => {
  return (
    <TableContainer className="tableContainer">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Post ID</TableCell>
            <TableCell>Caption</TableCell>
            <TableCell>Media URL</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.caption}</TableCell>
              <TableCell>
                <a href={post.mediaUrl} target="_blank" rel="noopener noreferrer">
                  View Media
                </a>
              </TableCell>
              <TableCell>
                <IconButton
                  color="error"
                  className="button"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  className="button"
                  aria-label="hide"
                >
                  <HideIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostTable;
