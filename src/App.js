import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);

  const btn_bk = () => {
    setClicked(true);
  };

  const dynamicStyle = {
    backgroundColor: clicked ? 'lightgreen' : 'white',
  };

  return (
    <div className="container">
      <div className="question">
        <div className='title'>
          {/* 여기다가 문제 내용 넣을 거임 */}
        </div>
      </div>

      <div className="Choice">
        <div className='Choice_div'>
          <div className='select' onClick={btn_bk} style={dynamicStyle}></div>
          <div className='select' onClick={btn_bk} style={dynamicStyle}></div>
          <div className='select' onClick={btn_bk} style={dynamicStyle}></div>
          <div className='select' onClick={btn_bk} style={dynamicStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
