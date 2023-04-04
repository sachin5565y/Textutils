import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils-Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils-Light Mode';
    }

  } 
  return (

    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert} />
    <Routes>
      <Route path='/' element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>



  );
}

export default App;
