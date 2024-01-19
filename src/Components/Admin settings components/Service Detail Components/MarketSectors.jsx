import { Box, Button, Chip, Divider, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const MarketSectors = () => {

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
                <Typography sx={{ fontWeight: '300', fontSize: '14px', opacity: '60%' }}>Market Sectors</Typography>
            </Box>
            <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxWidth: {xs:'40vw', md:'45vw', lg:'30vw'}, maxWidth: '650px', alignItems: 'start', justifyContent: 'start' }} spacing={1}>
                {chips.map((label, index) => (
                    <Chip key={index} label={label} onDelete={() => handleDelete(index)} />
                ))}
            </Stack>
            <Box >
                {addingNew ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                        <TextField
                            label="New Chip Label"
                            size='small'
                            fullWidth
                            value={newChipLabel}
                            onChange={(e) => setNewChipLabel(e.target.value)}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '16px', paddingInline: '20px' }}>
                            <Button variant="outlined" onClick={handleAddChip} sx={{display:'flex', gap:'5px'}}>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.875 8.5C13.875 8.59946 13.8355 8.69484 13.7652 8.76517C13.6948 8.83549 13.5995 8.875 13.5 8.875H8.375V14C8.375 14.0995 8.33549 14.1948 8.26517 14.2652C8.19484 14.3355 8.09946 14.375 8 14.375C7.90054 14.375 7.80516 14.3355 7.73484 14.2652C7.66451 14.1948 7.625 14.0995 7.625 14V8.875H2.5C2.40054 8.875 2.30516 8.83549 2.23483 8.76517C2.16451 8.69484 2.125 8.59946 2.125 8.5C2.125 8.40054 2.16451 8.30516 2.23483 8.23484C2.30516 8.16451 2.40054 8.125 2.5 8.125H7.625V3C7.625 2.90054 7.66451 2.80516 7.73484 2.73483C7.80516 2.66451 7.90054 2.625 8 2.625C8.09946 2.625 8.19484 2.66451 8.26517 2.73483C8.33549 2.80516 8.375 2.90054 8.375 3V8.125H13.5C13.5995 8.125 13.6948 8.16451 13.7652 8.23484C13.8355 8.30516 13.875 8.40054 13.875 8.5Z" fill="#3153CD" />
                                </svg>
                                Add
                            </Button>
                            <Button variant="outlined" color='error' onClick={handleDiscard} sx={{display:'flex', gap:'8px'}}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3606 10.7646C11.402 10.8032 11.4353 10.8498 11.4584 10.9015C11.4814 10.9533 11.4938 11.0092 11.4948 11.0658C11.4958 11.1224 11.4854 11.1787 11.4642 11.2312C11.443 11.2838 11.4114 11.3315 11.3713 11.3716C11.3312 11.4116 11.2835 11.4432 11.231 11.4644C11.1785 11.4856 11.1222 11.4961 11.0656 11.4951C11.0089 11.4941 10.953 11.4817 10.9013 11.4586C10.8495 11.4355 10.803 11.4023 10.7643 11.3608L5.99997 6.59717L1.2356 11.3608C1.15563 11.4354 1.04985 11.4759 0.940556 11.474C0.831261 11.4721 0.726982 11.4278 0.649687 11.3505C0.572393 11.2732 0.528117 11.1689 0.526189 11.0596C0.52426 10.9503 0.56483 10.8446 0.63935 10.7646L5.40302 6.00022L0.63935 1.23584C0.56483 1.15587 0.52426 1.05009 0.526189 0.9408C0.528117 0.831505 0.572393 0.727226 0.649687 0.649931C0.726982 0.572637 0.831261 0.528361 0.940556 0.526433C1.04985 0.524505 1.15563 0.565074 1.2356 0.639594L5.99997 5.40327L10.7643 0.639594C10.8443 0.565074 10.9501 0.524505 11.0594 0.526433C11.1687 0.528361 11.273 0.572637 11.3503 0.649931C11.4276 0.727226 11.4718 0.831505 11.4738 0.9408C11.4757 1.05009 11.4351 1.15587 11.3606 1.23584L6.59693 6.00022L11.3606 10.7646Z" fill="#EB3349" />
                                </svg>
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
            <Divider sx={{ marginBottom: '15px' }} />

        </Box>
    )
}

export default MarketSectors