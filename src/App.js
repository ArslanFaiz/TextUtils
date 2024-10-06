import './App.css';
import Alert from './Componenets/Alert';
import About from './Componenets/About';
import Navbar from './Componenets/Navbar';
import Textform from './Componenets/Textform';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
  setAlert({msg:message,
  type:type})
  setTimeout(()=>{
setAlert(null)
  },3000)
  }
  const togglemode=()=>{
    if(mode === 'dark'){
setMode('light')
document.body.style.backgroundColor='white'
showAlert('Light Mode is enabled','success')
    }
    else{
      setMode('dark')
document.body.style.backgroundColor='gray'
showAlert('Dark Mode is enabled','success')

          }
  }
  return (
    <>
    <Navbar title='TextUtils' about='About' mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <Router>
    <Routes>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/" element={<Textform heading='Enter the Text to Analyze'showAlert={showAlert} mode={mode}/>}>
          </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
