import React from 'react'
import styled from "styled-components"


const Button = ({text,icon,...rest}) => {
  return (
  <Div>
    <button {...rest}>
    {text} 
    {icon}
    </button>
  </Div>
 
  )
}

const Div = styled.div`
   button{
    background-color: black;
    color: white;
    width: 25vw;
    height: 7vh;
    border: none;
    outline: none;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
   }
`





export default Button;