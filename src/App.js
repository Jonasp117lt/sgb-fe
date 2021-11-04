import React from 'react'
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import { MainProvider } from './context'
import MainRoutes from './routes'


function App() {
  return (
    <MainProvider>
      <div className="App">
        <SideBar />
        <Header />
        <MainRoutes />
      </div>
    </MainProvider>
  );
}

export default App;
