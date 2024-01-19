import { Avatar, Box, Button, Modal, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import PersonalSettings from './Admin settings components/PersonalSettings';
import ServiceDetails from './Admin settings components/ServiceDetails';
import styled from 'styled-components';
import AdminRoles from './Admin settings components/AdminRoles';
import Cities from './Admin settings components/Cities';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    width: { xs: '80%', lg: '55%', },
    borderRadius: '10px'
};

const tabStyle = {
    backgroundColor: 'transparent',
    borderRadius: '10px',
    paddingInline: '50px',
    marginInline: '20px',
    textWrap: 'nowrap',
};

const tabs = [
    { label: 'Personal Details', index: 0 },
    { label: 'Service Details', index: 1 },
    { label: 'Admin Roles', index: 2 },
    { label: 'Cities', index: 3 },
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{flexGrow:'1'}}
        >
            {value === index && (
                <Box sx={{ p: 3, }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const AdminSoftwareSettings = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Button variant='contained' onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography sx={{ fontWeight: '600', fontSize: '28px', textAlign: 'center', paddingBlock: '30px' }}>Software Settings</Typography>

                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '530px', borderTop: 1, borderTopColor: 'divider', }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{
                                borderRight: 1, borderColor: 'divider',
                                '& .MuiTabs-indicator': {
                                    display: 'none',
                                },
                                paddingTop: '30px',
                                minWidth: '25%',
                            }}
                        >

                            {tabs.map((tab, index) => (
                                <Tab key={index} label={tab.label} style={{
                                    ...tabStyle,
                                    backgroundColor: value === tab.index ? 'rgba(227, 243, 255, 1)' : 'transparent',
                                    padding: value === tab.index ? '0' : 'inherit',
                                    color: '#040404',
                                }}
                                {...a11yProps(tab.index)} />
                            ))}

                        </Tabs>

                        <TabPanel value={value} index={0} >
                            <PersonalSettings></PersonalSettings>
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                            <ServiceDetails></ServiceDetails>
                        </TabPanel>

                        <TabPanel value={value} index={2}>
                            <AdminRoles></AdminRoles>
                        </TabPanel>

                        <TabPanel value={value} index={3}>
                            <Cities></Cities>
                        </TabPanel>

                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default AdminSoftwareSettings