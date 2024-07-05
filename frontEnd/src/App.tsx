import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from './Pages/Home/HomeScreen';
import NavContextProvider from './context/NavContextProvider';
import ArticleDetail from './Pages/articleDetail/ArticleDetail';

// Define routes


function App() {
  return (
    <NavContextProvider>
      <div className="app font-openSans">
        <Routes>
          <Route path="/" element={<HomeScreen />} /> // Home route
          <Route path="/blog/:id" element={<ArticleDetail />} /> // Blog detail route
        </Routes>
      </div>
    </NavContextProvider>
  );
}

export default App;
