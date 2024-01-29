import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './Component/Quiz/Quiz.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
