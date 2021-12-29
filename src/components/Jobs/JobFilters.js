import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const JobFilters = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mb: "10px" }}>
            <Box sx={{ width: "180px" }}>
                <Typography sx={{ fontSize: "20px", mb: "5px" }}>
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
                <Typography sx={{ fontSize: "20px", mb: "5px" }}>
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
                <Typography sx={{ fontSize: "20px", mb: "5px" }}>
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
                <Typography sx={{ fontSize: "20px", mb: "5px" }}>
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
                <Typography sx={{ fontSize: "20px", mb: "5px" }}>
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
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ color: "#fff", mt: "35px", px: "50px", mx: "auto" }}
                >
                    Filter
                </Button>
            </Box>
        </Box>
    )
}
