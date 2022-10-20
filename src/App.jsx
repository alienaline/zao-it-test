/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Commands from './views/Commands';
import Editor from './views/Editor';

function App() {
  const [view, setView] = useState(true);

  return (
    <div className="App">
      { 
        view ? <Commands setView={() => setView(!view)} /> 
        : <Editor setView={() => setView(!view)} /> 
      }
    </div>
  );
}

export default App;
