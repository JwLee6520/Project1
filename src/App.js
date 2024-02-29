import logo from './logo.svg';
import './App.css';
import React,{ useState }from 'react';
function App() {
  return (
    <div className="container">
      <div className="question">
          <div className='title'>
            {/* 여기다가 문제 내용 넣을 거임 */}
          </div>
      </div>

      <div className="Choice">
        <div className='Choice_div'>
          <label htmlFor="Choice1">문제 1: </label>
          <input type="text" placeholder='뭐시꼥이' />
          <label htmlFor="Choice2">문제 2: </label>
          <input type="text" placeholder='뭐시꼥이' />
          <label htmlFor="Choice3">문제 3: </label>
          <input type="text" placeholder='뭐시꼥이' />
          <label htmlFor="Choice4">문제 4: </label>
          <input type="text" placeholder='뭐시꼥이' />
        </div>
      </div>
    </div>
  );
}

export default App;
