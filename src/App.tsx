import React, { useEffect } from 'react';
import './App.css';
import { Button } from '@mantine/core';
import data from '../src/data/Wine-Data.json'
import classificationData from '../src/lib/classification'
import WrapperTableComponent from './components/Wrapper_Table_component';



function App() {
  useEffect(()=>{
    console.log(classificationData(data))
  },[])
  return (
    <div className="App">
      <WrapperTableComponent data={data} />
    </div>
  );
}

export default App;
