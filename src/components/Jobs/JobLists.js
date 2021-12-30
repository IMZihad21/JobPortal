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

export default function JobLists() {
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
    }, [ token ])
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
                            <StyledTableCell align="right">{job?.applicant ? job.applicant : 0}</StyledTableCell>
                            <StyledTableCell align="right">{job?.vacancies}</StyledTableCell>
                            <StyledTableCell align="right">{job?.shift}</StyledTableCell>
                            <StyledTableCell align="right">{job?.jobType}</StyledTableCell>
                            <StyledTableCell align="right">{job?.postDate}</StyledTableCell>
                            <StyledTableCell align="right">{job?.lastDateOfApply}</StyledTableCell>
                            <StyledTableCell align="right">{job?.salary ? job.salary : "Nagotiable"}</StyledTableCell>
                            <StyledTableCell align="right">{job?.status ? job.status : "Active"}</StyledTableCell>
                            <StyledTableCell align="right">actions</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
