import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Checkbox, List, ListItem, ListItemText, IconButton, Menu, MenuItem, TextField, Chip, Box, Typography, Switch, } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Cities = () => {
    const [cities, setCities] = useState([
        { name: 'Ontario', isDefault: false },
        { name: 'Ontario', isDefault: false },
        { name: 'Ontario', isDefault: false },
        { name: 'Ontario', isDefault: false },
    ]);

    const [newCityName, setNewCityName] = useState('');
    const [isDefault, setIsDefault] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleAddCity = () => {
        const newCity = {
            name: newCityName,
            isDefault: isDefault,
        };

        const updatedCities = isDefault
            ? cities.map((city) => ({ ...city, isDefault: false }))
            : cities;

        setCities([...updatedCities, newCity]);
        setNewCityName('');
        setIsDefault(false);
        setOpenModal(false);
    };

    const handleToggleDefault = (index) => {
        const updatedCities = cities.map((city, i) => ({
            ...city,
            isDefault: i === index && !city.isDefault,
        }));

        setCities(updatedCities);
    };

    const handleClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setSelectedIndex(index);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMakeDefault = () => {
        handleToggleDefault(selectedIndex);
        handleClose();
    };

    return (
        <div>
            <Box sx={{ width: { xs: '40vw', md: '45vw', lg: '37vw' }, paddingBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                <Typography sx={{ fontWeight: '300', fontSize: '14px', opacity: '50%' }}>Cities Added</Typography>
                <Button sx={{ borderRadius: '14px' }} variant='outlined' onClick={() => setOpenModal(true)}>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.875 8.5C13.875 8.59946 13.8355 8.69484 13.7652 8.76517C13.6948 8.83549 13.5995 8.875 13.5 8.875H8.375V14C8.375 14.0995 8.33549 14.1948 8.26517 14.2652C8.19484 14.3355 8.09946 14.375 8 14.375C7.90054 14.375 7.80516 14.3355 7.73484 14.2652C7.66451 14.1948 7.625 14.0995 7.625 14V8.875H2.5C2.40054 8.875 2.30516 8.83549 2.23483 8.76517C2.16451 8.69484 2.125 8.59946 2.125 8.5C2.125 8.40054 2.16451 8.30516 2.23483 8.23484C2.30516 8.16451 2.40054 8.125 2.5 8.125H7.625V3C7.625 2.90054 7.66451 2.80516 7.73484 2.73483C7.80516 2.66451 7.90054 2.625 8 2.625C8.09946 2.625 8.19484 2.66451 8.26517 2.73483C8.33549 2.80516 8.375 2.90054 8.375 3V8.125H13.5C13.5995 8.125 13.6948 8.16451 13.7652 8.23484C13.8355 8.30516 13.875 8.40054 13.875 8.5Z" fill="#3153CD" />
                    </svg>
                    Add New
                </Button>
            </Box>

            <List sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'start' }}>
                {cities.map((city, index) => (
                    <ListItem key={index} sx={{ width: '46%', backgroundColor: '#E3F3FF', margin: '5px', borderRadius: '10px', height: '40px' }}>
                        <ListItemText primary={city.name} />
                        {city.isDefault && <Chip label="Default" sx={{ borderRadius: '0px', height: 'min-content' }} color="primary" />}
                        <IconButton

                            aria-controls={`menu-${index}`}
                            aria-haspopup="true"
                            onClick={(event) => handleClick(event, index)}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id={`menu-${index}`}
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl && selectedIndex === index)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleMakeDefault}>Make Default</MenuItem>
                        </Menu>
                    </ListItem>
                ))}
            </List>

            <Dialog
                open={openModal}
                onClose={() => setOpenModal(false)}
                PaperProps={{
                    sx: {
                        borderRadius: '10px',
                        padding: '10px',
                        width:'660px'
                    },
                }}
            >
                <Typography
                    id="modal-modal-title"
                    sx={{ fontWeight: '600', fontSize: '24px', textAlign: 'center', paddingBlock: '3%' }}
                >
                    Add New City
                </Typography>
                <DialogContent sx={{ paddingBlock: '0px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                    <TextField
                        label="City Name"
                        value={newCityName}
                        onChange={(e) => setNewCityName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Switch color="primary" />}
                        checked={isDefault}
                        onChange={() => setIsDefault(!isDefault)}
                        label="Make Default"
                        labelPlacement="top"
                        sx={{ color: '#00000099', textWrap: 'nowrap', }}
                    />
                </DialogContent>
                <DialogActions sx={{display:'flex', justifyContent:'space-evenly', width:'min-content', marginInline:'auto', paddingBlock:'5%'}}>
                    <Button variant='outlined' sx={{borderColor:'#3153CD', color:'#3153CD'}} onClick={() => setOpenModal(false)}>Cancel</Button>
                    <Button variant='contained' sx={{backgroundColor:'#3153CD'}} onClick={handleAddCity} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Cities;
