import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useProvider from '../../hooks/useProvider';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [ `&.${tableCellClasses.head}` ]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [ `&.${tableCellClasses.body}` ]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function JobLists({ jobs, setJobs }) {
    const { token } = useProvider();
    const todayDate = (new Date()).toISOString().split('T')[ 0 ].replace(/-/g, "");
    const handleDeleteJob = jobId => {
        const baseURL = `https://tf-practical.herokuapp.com/api/job_update/${jobId}`;
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }
        if (window.confirm("Do you really want to remove this?")) {
            axios.delete(baseURL, config)
                .then((result) => {
                    alert("Successfully deleted this job!")
                    const newJobs = jobs.filter(job => job.id !== jobId);
                    setJobs(newJobs);
                }).catch((err) => {
                    console.log(err.response);
                });
        }
    };
    return (
        <TableContainer component={Paper} sx={{ mt: "50px" }}>
            <Typography component="h3" variant="h4" sx={{ py: "10px", backgroundColor: "primary.main", color: "#fff", textAlign: "center" }}>
                Recent Job Posts
            </Typography>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>POST NAME</StyledTableCell>
                        <StyledTableCell align="right">TOTAL APPLICANT</StyledTableCell>
                        <StyledTableCell align="right">VACANCIES</StyledTableCell>
                        <StyledTableCell align="right">SHIFT</StyledTableCell>
                        <StyledTableCell align="right">TYPE</StyledTableCell>
                        <StyledTableCell align="right">POST DATE</StyledTableCell>
                        <StyledTableCell align="right">EXPIRE DATE</StyledTableCell>
                        <StyledTableCell align="right">SALARY</StyledTableCell>
                        <StyledTableCell align="right">STATUS</StyledTableCell>
                        <StyledTableCell align="right">ACTIONS</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jobs.map((job) => (
                        <StyledTableRow key={job.id}>
                            <StyledTableCell component="th" scope="row" sx={{ width: "140px" }}>
                                {job?.jobTitle}
                            </StyledTableCell>
                            <StyledTableCell align="right" sx={{ width: "100px" }}>{job?.applicant ? job.applicant : 0}</StyledTableCell>
                            <StyledTableCell align="right">{job?.vacancies}</StyledTableCell>
                            <StyledTableCell align="right">{job?.shift[ 0 ].toUpperCase() + job?.shift.slice(1)}</StyledTableCell>
                            <StyledTableCell align="right">{job?.jobType}</StyledTableCell>
                            <StyledTableCell align="right">{job?.postDate}</StyledTableCell>
                            <StyledTableCell align="right">{job?.lastDateOfApply}</StyledTableCell>
                            <StyledTableCell align="right">{job?.salary ? job.salary : "Nagotiable"}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Typography sx={{ textAlign: "center", px: "5px", backgroundColor: "primary.main", color: "#fff", borderRadius: "3px" }}>
                                    {(parseInt(job.lastDateOfApply.replace(/-/g, "")) < todayDate) ? "Expired" : "Active"}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <IconButton aria-label="fingerprint" color="secondary" size="small">
                                        <EditIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton onClick={() => handleDeleteJob(job.id)} aria-label="fingerprint" color="error" size="small">
                                        <DeleteForeverIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton component={Link} to={`/jobs/${job.id}`} aria-label="fingerprint" color="info" size="small">
                                        <VisibilityIcon fontSize="inherit" />
                                    </IconButton>
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
