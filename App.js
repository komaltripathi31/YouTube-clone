import React from "react";
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <Header />

        <Routes>
        <Route path="/search/:searchTerm" element={<div className="app__page">
               <Sidebar />
                <SearchPage />
            </div>}>
          </Route>
          <Route path="/"
          element={<div className="app__page">
               <Sidebar />
                <RecommendedVideos />
            </div>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
