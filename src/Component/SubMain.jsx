import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Quiz from './Quiz/Quiz'

const SubMain = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Quiz/>}/>
      </Routes>
    </div>
  )
}

export default SubMain
