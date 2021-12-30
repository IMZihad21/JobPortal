import React from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import axios from 'axios';
import useProvider from '../../hooks/useProvider';

const JobView = () => {
    const { jobId } = useParams();
    const { token } = useProvider();
    const [ job, setJob ] = React.useState({});
    React.useEffect(() => {
        if (!token) {
            return;
        };
        const baseURL = `https://tf-practical.herokuapp.com/api/job_update/${jobId}/`;
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }
        axios.get(baseURL, config)
            .then((result) => {
                setJob(result.data);
            }).catch((err) => {
                console.log(err.response);
            });
    }, [ jobId, token ])
    if (!job.jobTitle) {
        return (
            <Box sx={{ display: 'flex', justifyContent: "center", mt: "100px" }}>
                <CircularProgress />
            </Box>
        );
    }
    return (
        <Container sx={{ mt: "10px", borderRadius: "5px", backgroundColor: "#fff" }}>
            <Box sx={{ display: "flex", borderBottom: 1, py: "20px" }}>
                <Typography component="h4" variant="h6" sx={{ mr: "40px" }}>
                    JOB TITLE
                </Typography>
                <Typography component="h4" variant="h6" sx={{ fontWeight: "700" }}>
                    {job.jobTitle}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", borderBottom: 1, py: "20px" }}>
                <Box sx={{ mr: "80px" }}>
                    <Typography component="h4" variant="h6" sx={{ mb: "10px", fontWeight: "bold" }}>
                        SHIFT
                    </Typography>
                    <Typography component="h4" variant="h6" sx={{ fontWeight: 'medium', fontSize: "15px", mb: "20px" }}>
                        {job.shift}
                    </Typography>
                </Box>
                <Box sx={{ mr: "80px" }}>
                    <Typography component="h4" variant="h6" sx={{ mb: "10px", fontWeight: "bold" }}>
                        DEPARTMENT
                    </Typography>
                    <Typography component="h4" variant="h6" sx={{ fontWeight: 'medium', fontSize: "15px", mb: "20px" }}>
                        {job.department ? job.department : "Development"}
                    </Typography>
                </Box>
                <Box sx={{ mr: "80px" }}>
                    <Typography component="h4" variant="h6" sx={{ mb: "10px", fontWeight: "bold" }}>
                        LEVEL
                    </Typography>
                    <Typography component="h4" variant="h6" sx={{ fontWeight: 'medium', fontSize: "15px", mb: "20px" }}>
                        {job.level}
                    </Typography>
                </Box>
                <Box sx={{ mr: "80px" }}>
                    <Typography component="h4" variant="h6" sx={{ mb: "10px", fontWeight: "bold" }}>
                        VACANCY
                    </Typography>
                    <Typography component="h4" variant="h6" sx={{ fontWeight: 'medium', fontSize: "15px", mb: "20px" }}>
                        {job.vacancies}
                    </Typography>
                </Box>
                <Box sx={{ mr: "80px" }}>
                    <Typography component="h4" variant="h6" sx={{ mb: "10px", fontWeight: "bold" }}>
                        SALARY
                    </Typography>
                    <Typography component="h4" variant="h6" sx={{ fontWeight: 'medium', fontSize: "15px", mb: "20px" }}>
                        {job?.salary ? job.salary : "Nagotiable"}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ borderBottom: 1, py: "20px" }}>
                <Typography component="h4" variant="h6" sx={{ mb: "10px", fontWeight: "bold" }}>
                    DESCRIPTION
                </Typography>
                <Typography>
                    {job.jobDescription}
                </Typography>
            </Box>
            <Box sx={{ py: "20px" }}>
                <Typography component="h4" variant="h6" sx={{ mb: "10px", fontWeight: "bold" }}>
                    FILTER QUESTION
                </Typography>
                <List>
                    {
                        new Array(5).fill(null).map((val, idx) => <ListItem disablePadding key={idx}>
                            <ListItemText primary={`${idx + 1}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur?`} />
                        </ListItem>)
                    }
                </List>
            </Box>
        </Container>
    )
}

export default JobView
