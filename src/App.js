import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import { MainProvider } from './context'
import MainRoutes from './routes'


function App() {
  return (
    <MainProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App" style={{ overflow: "auto" }}>
          <SideBar />
          <Header />
          <MainRoutes />
        </div>
      </LocalizationProvider>
    </MainProvider>
  );
}

export default App;
