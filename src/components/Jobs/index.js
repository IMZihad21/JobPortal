import React from 'react';
import Container from '@mui/material/Container';
import JobFilters from './JobFilters';
import JobLists from './JobLists';
import JobCreate from './JobCreate';

const Jobs = () => {
    return (
        <Container>
            <JobCreate />
            <JobFilters />
            <JobLists />
        </Container>
    )
}

export default Jobs
