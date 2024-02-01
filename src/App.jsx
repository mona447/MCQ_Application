import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './Component/Quiz/Quiz.jsx'
import Java from './Component/Chapter/Java/java.jsx';
import Python from './Component/Chapter/Python/Python.jsx';
import JavaScript from './Component/Chapter/JavaScript/JavaScript.jsx';
import HTML from './Component/Chapter/HTML/HTML.jsx';
import CSS from './Component/Chapter/CSS/CSS.jsx';
import SQL from './Component/Chapter/SQL/SQL.jsx'
import Reactjs from './Component/Chapter/Reactjs/Reactjs.jsx';
import DataType from './Component/QuestionBank/Java/DataType.jsx';
import Statements from './Component/QuestionBank/Sql/Statements.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz/>} />
          <Route path="/java" element={<Java/>} />
          <Route path="/python" element={<Python/>} />
          <Route path="/javascript" element={<JavaScript/>} />
          <Route path="/sql" element={<SQL/>} />
          <Route path="/reactjs" element={<Reactjs/>} />
          <Route path="/html" element={<HTML/>} />
          <Route path="/css" element={<CSS/>} />
          <Route path="/datatype" element={<DataType/>} />
          <Route path="/statements" element={<Statements/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
