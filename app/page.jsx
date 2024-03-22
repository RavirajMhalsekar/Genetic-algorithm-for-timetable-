// pages/index.js
"use client";
import React, { useState } from "react";

import Timetable from "./Timetable";

const Home = () => {
  const [timetables, setTimetables] = useState([]);

  const handleGenerateTimetables = () => {
    const newTimetables = generateSimultaneousTimetables(5, 9, classes);
    setTimetables(newTimetables);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-6">Timetable generator</h1>
      <Timetable/>
      
    </div>
  );
};

export default Home;
