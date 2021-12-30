import React from 'react';
import Container from '@mui/material/Container';
import JobFilters from './JobFilters';
import JobLists from './JobLists';
import JobCreate from './JobCreate';
import axios from 'axios';
import useProvider from '../../hooks/useProvider';

const Jobs = () => {
    const [ jobs, setJobs ] = React.useState([]);
    const { token } = useProvider();
    React.useEffect(() => {
        const baseURL = "https://tf-practical.herokuapp.com/api/job_post/";
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }
        axios.get(baseURL, config)
            .then((result) => {
                setJobs(result.data);
            }).catch((err) => {
                console.log(err.response);
            });
    }, [ token, setJobs ])
    return (
        <Container sx={{ backgroundColor: "#fff", height: "90%", mt: "20px", borderRadius: "5px", p: "10px" }}>
            <JobCreate setJobs={setJobs} jobs={jobs} />
            <JobFilters setJobs={setJobs} jobs={jobs} />
            <JobLists setJobs={setJobs} jobs={jobs} />
        </Container>
    )
}

export default Jobs
