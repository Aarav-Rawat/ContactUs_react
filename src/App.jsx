import React from 'react'
import './App.css';
import Nav from './Components/Nav';
import Contact from './Components/Contact';
import Form from './Components/Form';
import Lower from './Components/Lower';

const App = () => {
  return (
   <>
   <div>
     <Nav/>
     <Contact/>
     <Form/>
     <Lower/>
   </div>
   </>
  )
}



export default App