import { useState } from "react";
import "./App.css";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";
import Alert from "./componets/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
 setAlert( {
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
}
  const togglemode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.title="My-App DarkMode";
      showAlert("DarkMode is Enabled","success")
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
      document.title="My-App LightMode";
      showAlert("LightMode is Enabled","danger")
    }

  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="My-App" about="About Us" mode={mode} toggolemode={togglemode} />
      <Alert alert={alert}/>
      {/* <Navbar/>  to display defaultprops*/}

      <div className="container">
         {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            
          {/* </Route>
        </Switch> */}
       
       
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
