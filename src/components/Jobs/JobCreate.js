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

export default function JobCreate() {
    const [ open, setOpen ] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
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
                <Box sx={style}>
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
                    <Typography id="modal-modal-title" variant="h5" textAlign="center" component="h2">
                        CREATE A JOB
                    </Typography>
                    <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                        <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                            Job Title:
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" size="small" fullWidth />
                    </Box>
                    <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                        <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                            Valid Until:
                        </Typography>
                        <TextField
                            id="date"
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
                                value={"Day"}
                                // onChange={handleChange}
                                size="small"
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="Day">Day</MenuItem>
                                <MenuItem value="Night">Night</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                        <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                            Type:
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={"fullTime"}
                                // onChange={handleChange}
                                size="small"
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="fullTime">Full Time</MenuItem>
                                <MenuItem value="partTime">Part Time</MenuItem>
                                <MenuItem value="internship">Internship</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                        <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                            Level:
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" size="small" fullWidth />
                    </Box>
                    <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                        <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                            Location:
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" size="small" fullWidth />
                    </Box>
                    <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                        <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                            Vacancy:
                        </Typography>
                        <TextField id="outlined-basic" type="number" variant="outlined" size="small" fullWidth />
                    </Box>
                    <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                        <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                            Salary:
                        </Typography>
                        <TextField id="outlined-basic" type="number" variant="outlined" size="small" fullWidth />
                    </Box>
                    <Box sx={{ my: "10px", display: "flex", justifyContent: "space-between" }}>
                        <Typography component="h4" variant="h6" sx={{ width: "250px" }}>
                            Job Description:
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            fullWidth
                            rows={4}
                        />
                    </Box>
                    <Box sx={{ mt: "10px", ml: "190px", display: "flex", justifyContent: "space-between" }}>
                        <Button
                            // onClick={handleOpen}
                            variant="contained"
                            color="primary"
                            sx={{ color: "#fff", width: "300px" }}
                        >
                            Save and Add Another
                        </Button>
                        <Button
                            // onClick={handleOpen}
                            variant="contained"
                            color="primary"
                            sx={{ color: "#fff", width: "200px" }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
