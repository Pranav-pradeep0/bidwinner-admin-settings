import { Avatar, Box, Button, FormControl, FormControlLabel, IconButton, Input, InputLabel, Modal, Switch, TextField, Typography } from '@mui/material'
import { blue, red } from '@mui/material/colors';
import React, { useState } from 'react'
import styled from 'styled-components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

const AdminRoles = () => {

  const dummyUsers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', picSrc: '', enabled: true },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', picSrc: '', enabled: false },
  ];

  const [users, setUsers] = useState(dummyUsers);
  const [open, setOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({ name: '', email: '' });

  const handleToggle = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, enabled: !user.enabled } : user
      )
    );
  };

  const handleDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewUserData({ name: '', email: '' });
  };

  const handleAddUser = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: prevUsers.length + 1,
        name: newUserData.name,
        email: newUserData.email,
        picSrc: '',
        enabled: false,
      },
    ]);

    handleClose();
  };

  return (
    <div>

      <Box sx={{ width: { xs: '40vw', md: '45vw', lg: '37vw' }, paddingBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: '300', fontSize: '14px', opacity: '50%' }}>Admins</Typography>
        <Button sx={{ borderRadius: '14px' }} variant='outlined' onClick={handleOpen}>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.875 8.5C13.875 8.59946 13.8355 8.69484 13.7652 8.76517C13.6948 8.83549 13.5995 8.875 13.5 8.875H8.375V14C8.375 14.0995 8.33549 14.1948 8.26517 14.2652C8.19484 14.3355 8.09946 14.375 8 14.375C7.90054 14.375 7.80516 14.3355 7.73484 14.2652C7.66451 14.1948 7.625 14.0995 7.625 14V8.875H2.5C2.40054 8.875 2.30516 8.83549 2.23483 8.76517C2.16451 8.69484 2.125 8.59946 2.125 8.5C2.125 8.40054 2.16451 8.30516 2.23483 8.23484C2.30516 8.16451 2.40054 8.125 2.5 8.125H7.625V3C7.625 2.90054 7.66451 2.80516 7.73484 2.73483C7.80516 2.66451 7.90054 2.625 8 2.625C8.09946 2.625 8.19484 2.66451 8.26517 2.73483C8.33549 2.80516 8.375 2.90054 8.375 3V8.125H13.5C13.5995 8.125 13.6948 8.16451 13.7652 8.23484C13.8355 8.30516 13.875 8.40054 13.875 8.5Z" fill="#3153CD" />
          </svg>
          Add New
        </Button>
      </Box>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" sx={{ fontWeight: '600', fontSize: '24px', textAlign: 'center' }}>
              Add New Admin
            </Typography>
            <Box sx={{ paddingInline: '50px' }}>
              <FormControl fullWidth sx={{ mt: 2, display: 'grid', gap: '10px' }}>
                <Typography sx={{ opacity: '50%' }}>Full name of the user</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={newUserData.name}
                  onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: 2, display: 'grid', gap: '10px' }}>
                <Typography sx={{ opacity: '50%' }}>Email</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type="email"
                  value={newUserData.email}
                  onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                />
              </FormControl>
            </Box>
            <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-evenly', width:'60%', marginInline:'auto' }}>
              <Button variant="outlined" sx={{width:'35%', borderRadius:'10px', borderColor:'#3153CD', color:'#3153CD'}} onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" sx={{width:'35%', borderRadius:'10px', backgroundColor:'#3153CD'}} onClick={handleAddUser}>
                Create
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>

      <Box>
        {users.map((user) => (
          <Box
            key={user.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding={2}
            border={1}
            borderRadius={2}
            borderColor="grey.300"
            marginBottom={2}
            sx={{ width: { xs: '40vw', md: '45vw', lg: '35vw' } }}
          >
            <Typography variant="subtitle1">{user.id}</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
              <Box display="flex" alignItems="center">
                <Avatar alt={user.name} src={user.picSrc} />
                <Box marginLeft={2}>
                  <Typography variant="subtitle1">{user.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{user.email}</Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center">
                {/* <Typography variant="body2">{user.enabled ? 'enabled' : 'disabled'}</Typography> */}
                <div className="btn-container">
                  <label className="switch btn-color-mode-switch">
                    <input
                      id={`user_${user.id}`}
                      name={`user_${user.id}`}
                      type="checkbox"
                      checked={!user.enabled}
                      onChange={() => handleToggle(user.id)}
                    />
                    <label className="btn-color-mode-switch-inner" data-off="Enabled" data-on="Disabled" htmlFor={`user_${user.id}`}></label>
                  </label>
                </div>
              </Box>
            </Box>

            <IconButton aria-label="delete" onClick={() => handleDelete(user.id)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M21 5.25C21 5.44891 20.921 5.63968 20.7803 5.78033C20.6397 5.92098 20.4489 6 20.25 6H19.5V19.5C19.5 19.8978 19.342 20.2794 19.0607 20.5607C18.7794 20.842 18.3978 21 18 21H6C5.60218 21 5.22064 20.842 4.93934 20.5607C4.65804 20.2794 4.5 19.8978 4.5 19.5V6H3.75C3.55109 6 3.36032 5.92098 3.21967 5.78033C3.07902 5.63968 3 5.44891 3 5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25ZM8.25 3H15.75C15.9489 3 16.1397 2.92098 16.2803 2.78033C16.421 2.63968 16.5 2.44891 16.5 2.25C16.5 2.05109 16.421 1.86032 16.2803 1.71967C16.1397 1.57902 15.9489 1.5 15.75 1.5H8.25C8.05109 1.5 7.86032 1.57902 7.71967 1.71967C7.57902 1.86032 7.5 2.05109 7.5 2.25C7.5 2.44891 7.57902 2.63968 7.71967 2.78033C7.86032 2.92098 8.05109 3 8.25 3Z" fill="black" />
                </g>
              </svg>
            </IconButton>
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default AdminRoles