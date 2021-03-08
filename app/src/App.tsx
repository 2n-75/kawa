import React from 'react'
import styled, { keyframes } from 'styled-components'
import './App.css'
import './assets/main.scss'
import Couple from './components/Couple'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>ああほげ</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Wrapper>
        <Couple/>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
`
export default App;
