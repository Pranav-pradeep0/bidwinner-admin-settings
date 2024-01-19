import { Box, Button, Chip, Divider, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const CompanyType = () => {
    
    const [chips, setChips] = useState([
        'Deletable',
        'Deletable',
        'Deletable',
    ]);

    const [addingNew, setAddingNew] = useState(false);

    const [newChipLabel, setNewChipLabel] = useState('');

    const handleDelete = (index) => {
        const updatedChips = chips.filter((_, i) => i !== index);
        setChips(updatedChips);
    };

    const handleAddChip = () => {
        const updatedChips = [...chips, newChipLabel];
        setChips(updatedChips);
        setAddingNew(false);
        setNewChipLabel('');
    };

    const handleDiscard = () => {
        setAddingNew(false);
        setNewChipLabel('');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
            <Box>
                <Typography sx={{ fontWeight: '300', fontSize: '14px', opacity: '60%' }}>Company Type</Typography>
            </Box>
            <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxWidth: {xs:'40vw', md:'45vw', lg:'30vw'}, alignItems: 'start', justifyContent: 'start' }} spacing={1}>
                {chips.map((label, index) => (
                    <Chip key={index} label={label} onDelete={() => handleDelete(index)} />
                ))}
            </Stack>
            <Box >
                {addingNew ? (
                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', }}>
                        <TextField
                            label="New Chip Label"
                            size='small'
                            fullWidth
                            value={newChipLabel}
                            onChange={(e) => setNewChipLabel(e.target.value)}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '10px', }}>
                            <Button variant="contained" onClick={handleAddChip}>
                                Add
                            </Button>
                            <Button variant="outlined" onClick={handleDiscard}>
                                Discard
                            </Button>
                        </Box>
                    </Box>
                ) : (
                    <Button sx={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }} variant="outlined" onClick={() => setAddingNew(true)}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.875 8.5C13.875 8.59946 13.8355 8.69484 13.7652 8.76517C13.6948 8.83549 13.5995 8.875 13.5 8.875H8.375V14C8.375 14.0995 8.33549 14.1948 8.26517 14.2652C8.19484 14.3355 8.09946 14.375 8 14.375C7.90054 14.375 7.80516 14.3355 7.73484 14.2652C7.66451 14.1948 7.625 14.0995 7.625 14V8.875H2.5C2.40054 8.875 2.30516 8.83549 2.23483 8.76517C2.16451 8.69484 2.125 8.59946 2.125 8.5C2.125 8.40054 2.16451 8.30516 2.23483 8.23484C2.30516 8.16451 2.40054 8.125 2.5 8.125H7.625V3C7.625 2.90054 7.66451 2.80516 7.73484 2.73483C7.80516 2.66451 7.90054 2.625 8 2.625C8.09946 2.625 8.19484 2.66451 8.26517 2.73483C8.33549 2.80516 8.375 2.90054 8.375 3V8.125H13.5C13.5995 8.125 13.6948 8.16451 13.7652 8.23484C13.8355 8.30516 13.875 8.40054 13.875 8.5Z" fill="#3153CD" />
                        </svg>
                        Add New
                    </Button>
                )}
            </Box>
            <Divider sx={{ marginBottom:'15px' }} />
        </Box>
    )
}

export default CompanyType