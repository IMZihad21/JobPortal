import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Home(props) {
    return (
        <Container>
            <Box sx={{ textAlign: 'left', mt: "100px", display: "flex", justifyContent: "center" }}>
                <Box>
                    <Typography variant="h4" color="primary.main">
                        Tech
                    </Typography>
                    <Typography variant="h2" color="secondary.main" sx={{ fontWeight: "500" }}>
                        Foring
                    </Typography>
                    <Typography variant="subtitle2" color="primary.main">
                        Shaping tomorrow's Cyber Security
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ textAlign: "center", mt: "50px", mx: "50px" }}>
                <Typography variant="h4" color="primary.main">
                    Welcome to TechForing
                </Typography>
            </Box>
        </Container>
    );
}
