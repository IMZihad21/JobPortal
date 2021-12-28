import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Authentication from './components/Authentication';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <NavBar />
      <Container sx={{ paddingTop: "65px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;
