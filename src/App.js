import './App.css';
import Header from "./Header";
import Menu from "./Menu";
import React, {useState} from 'react';
import aliveCorona from "./alive-corona.png";
import deadCorona from "./dead-corona.png";


export default function App() {

    const [active, setActive] = useState(false)


const activeHandler = () => {
 
    setActive(!active);
}

const inactiveHandler = () =>
{
  if (active === true)
  {
    setActive(false)
  }
}

const changePicHandler = () => {
  if (active === true)
  {
    return deadCorona
  } else 
  {
    return aliveCorona
  }
}

const growElementHandler = (e) => 
{
    if (active === true) 
    {
      e.target.style.transform = "scale(1.2)";
    } 
    else{
  e.target.style.transform = "scale(1)"

    }
}



return (
  <>
  <div id="container" onClick={inactiveHandler, growElementHandler}>
  <Header />
  <Menu growElementHandler={growElementHandler} activeHandler={activeHandler} changePic={changePicHandler} />
  </div>
  </>
   
 
)

}


