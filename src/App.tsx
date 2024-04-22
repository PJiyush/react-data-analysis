import React, { useEffect } from 'react';
import './App.css';
import data from '../src/data/Wine-Data.json'
import WrapperTableComponent from './components/Wrapper_Table_component';



function App() {
  return (
    <div className="App">
      <div className='heading'>React Data Analysis</div>
      <WrapperTableComponent data={data} value={1}/>
      <WrapperTableComponent data={data} value={2}/>
    </div>
  );
}

export default App;
