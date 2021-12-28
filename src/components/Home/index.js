import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Home(props) {
    return (
        <Container>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
                Welcome to the React Material-UI
            </Typography>
        </Container>
    );
}
