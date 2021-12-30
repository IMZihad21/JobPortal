import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const JobFilters = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mb: "10px" }}>
            <Box sx={{ width: "180px" }}>
                <Typography sx={{ fontSize: "15px", mb: "5px" }}>
                    Search
                </Typography>
                <TextField
                    id="input-with-icon-textfield"
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Box>
            <Box sx={{ width: "180px" }}>
                <Typography sx={{ fontSize: "15px", mb: "5px" }}>
                    Select By Type
                </Typography>
                <TextField
                    id="input-with-icon-textfield"
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Box>
            <Box sx={{ width: "180px" }}>
                <Typography sx={{ fontSize: "15px", mb: "5px" }}>
                    Select By Department
                </Typography>
                <TextField
                    id="input-with-icon-textfield"
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Box>
            <Box sx={{ width: "180px" }}>
                <Typography sx={{ fontSize: "15px", mb: "5px" }}>
                    Select By Time
                </Typography>
                <TextField
                    id="input-with-icon-textfield"
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Box>
            <Box sx={{ width: "180px" }}>
                <Typography sx={{ fontSize: "15px", mb: "5px" }}>
                    Select By Shift
                </Typography>
                <TextField
                    id="input-with-icon-textfield"
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Box>

            <Box sx={{ width: "180px" }}>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ color: "#fff", mt: "30px", px: "50px", ml: "30px" }}
                >
                    Filter
                </Button>
            </Box>
        </Box>
    )
}

export default JobFilters;
