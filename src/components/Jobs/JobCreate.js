import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import useProvider from '../../hooks/useProvider';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    overflowY: "scroll",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function JobCreate({ jobs, setJobs }) {
    const { token } = useProvider();
    const [ open, setOpen ] = React.useState(false);
    const [ shift, setShift ] = React.useState("day");
    const [ type, setType ] = React.useState("full_time");
    const [ error, setError ] = React.useState(false);
    const [ success, setSuccess ] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = event => {
        event.preventDefault();
        setError(false);
        setSuccess(false);
        const data = new FormData(event.currentTarget);
        const jobTitle = data.get('jobTitle');
        const expireDate = data.get('expireDate');
        const jobLevel = data.get('jobLevel');
        const department = data.get('department');
        const location = data.get('location');
        const vacancy = data.get('vacancy');
        const salary = data.get('salary');
        const jobDescription = data.get('jobDescription');
        if (jobTitle === "" || expireDate === "" || jobLevel === "" || department === "" || location === "" || vacancy === "" || salary === "" || jobDescription === "") {
            setError(true);
            return;
        };
        const baseURL = "https://tf-practical.herokuapp.com/api/job_post/";
        const payload = {
            "jobTitle": jobTitle,
            "lastDateOfApply": expireDate,
            "level": jobLevel,
            "shift": shift,
            "location": location,
            "vacancies": vacancy,
            "jobType": type,
            "jobDescription": jobDescription,
            "salary": salary,
            "department": department
        };
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        };

        axios.post(baseURL, payload, config)
            .then((result) => {
                const newJobList = [ ...jobs, result.data ];
                setJobs(newJobList);
                setSuccess(true);
            }).catch((err) => {
                console.log(err.response);
                setError(true);
            });
        if (document.activeElement[ 'value' ] === "submit_close") {
            handleClose();
        };
    };

    return (
        <div>
            <Box sx={{ display: "flex", mt: "10px" }}>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    onClick={handleOpen}
                    variant="contained"
                    color="secondary"
                    sx={{ color: "#fff" }}
                    startIcon={<AddIcon />}
                >
                    Create Job
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button
                            onClick={handleClose}
                            variant="text"
                            sx={{ color: "primary.main" }}
                        >
                            <CancelOutlinedIcon />
                        </Button>
                    </Box>
                    <Typography name="modal-modal-title" variant="h5" textAlign="center" component="h2">
                        CREATE A JOB
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                        <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                            <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                                Job Title:
                            </Typography>
                            <TextField name="jobTitle" variant="outlined" size="small" fullWidth />
                        </Box>
                        <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                            <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                                Valid Until:
                            </Typography>
                            <TextField
                                name="expireDate"
                                fullWidth
                                type="date"
                                size="small"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                            <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                                Shift:
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    value={shift}
                                    onChange={(e) => setShift(e.target.value)}
                                    size="small"
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="day">Day</MenuItem>
                                    <MenuItem value="night">Night</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                            <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                                Type:
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    value={type}
                                    onChange={e => setType(e.target.value)}
                                    size="small"
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="full_time">Full Time</MenuItem>
                                    <MenuItem value="part_time">Part Time</MenuItem>
                                    <MenuItem value="internship">Internship</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                            <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                                Level:
                            </Typography>
                            <TextField name="jobLevel" variant="outlined" size="small" fullWidth />
                        </Box>
                        <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                            <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                                Department:
                            </Typography>
                            <TextField name="department" variant="outlined" size="small" fullWidth />
                        </Box>
                        <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                            <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                                Location:
                            </Typography>
                            <TextField name="location" variant="outlined" size="small" fullWidth />
                        </Box>
                        <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                            <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                                Vacancy:
                            </Typography>
                            <TextField name="vacancy" type="number" variant="outlined" size="small" fullWidth />
                        </Box>
                        <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                            <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                                Salary:
                            </Typography>
                            <TextField name="salary" type="number" variant="outlined" size="small" fullWidth />
                        </Box>
                        <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                            <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                                Job Description:
                            </Typography>
                            <TextField
                                name="jobDescription"
                                multiline
                                fullWidth
                                rows={4}
                            />
                        </Box>
                        <Box>
                            {
                                error && <Typography color="error" textAlign="center">
                                    Provide all information correctly to continue!
                                </Typography>
                            }
                            {
                                success && <Typography color="success" textAlign="center">
                                    Successfully added new job!
                                </Typography>
                            }
                        </Box>
                        <Box sx={{ mt: "10px", ml: "190px", display: "flex", justifyContent: "space-between" }}>
                            <Button
                                type="submit"
                                value="submit_clear"
                                variant="contained"
                                color="primary"
                                sx={{ color: "#fff", width: "300px" }}
                            >
                                Save and Add Another
                            </Button>
                            <Button
                                type="submit"
                                value="submit_close"
                                variant="contained"
                                color="primary"
                                sx={{ color: "#fff", width: "200px" }}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
