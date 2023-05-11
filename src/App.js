import React from 'react';
import logo from './logo.svg';
import 'ScssRoot/main.scss';

import { ClassicButton, ClassicInput, FileUploader, RadioButton } from 'ComponentsRoot';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <ClassicButton>Users</ClassicButton>
      <ClassicInput />
      <FileUploader/>
      <RadioButton/>
    </>

  );
}

export default App;
