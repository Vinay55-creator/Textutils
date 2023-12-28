
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) =>{
    setAlert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2d343f';
      showAlert('Dark Mode enable sucessefull', 'success');
    } 
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode enable sucessefull', 'success');
    }
  }

  return (
    <>
<Navbar title='TextTutils' Mode = {Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert = {showAlert} heading='Enter your Text below' Mode = {Mode}/>
</div>
    </>
  );
}

export default App;
