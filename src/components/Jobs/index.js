import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';
import { JobFilters } from './JobFilters';
import JobLists from './JobLists';

const Jobs = () => {
    return (
        <Container>
            <Box sx={{ display: "flex", mt: "10px" }}>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ color: "#fff" }}
                    startIcon={<AddIcon />}
                >
                    Create Job
                </Button>
            </Box>
            <JobFilters />
            <JobLists />
        </Container>
    )
}

export default Jobs
