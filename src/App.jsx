
import React from 'react';
import Time from './time.jsx';
import './App.css';
import Bookmark from './bookmark.jsx';
function App() {
  
  return (
    <>
      <div className="tdisplay">
        <h1 id='time'><div><Time /></div>
        {/* <button id="timer">Timer</button> */}
        </h1>
        
      </div>
      <div className="bookmark">
        <Bookmark />
      </div>
    </>
  );
}

export default App; 

