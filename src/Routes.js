import React from "react";
import MainPage from "./Pages/MainPage/MainPage";
import TicketBookPage from "./Pages/TicketBookPage/TicketBookPage";
import SummaryPage from "./Pages/SummaryPage/SummaryPage";

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

  
export default function App() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieName" element={<SummaryPage />} />
        <Route path="/book" element={<TicketBookPage />} />

       
      </Routes>
    </Router>
    );
  }
  
  