import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { HiCursorClick } from "react-icons/hi";

const Lower = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
 

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <Div>
      <form onSubmit={onSubmit}>
        <div className="inputs">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>

        <div className="inputs">
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" />
        </div>

        <div className="inputs">
          <label htmlFor="text">Text</label>
          <textarea name="text" id="" cols="30" rows="10"></textarea>
        </div>

        <Button text="Submit" icon={<HiCursorClick />} />

        <div>{name + " " + email + " " + text}</div>
      </form>

      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png"
        alt=""
      />
    </Div>
  );
};

const Div = styled.div`
  display: flex;

  form {
    margin: 2vw 10vw;
  }

  .inputs {
    position: relative;
  }

  input,
  textarea {
    width: 25vw;
    margin-bottom: 2vw;
    border: none;
    outline: none;
    border: 1.5px solid black;
    padding: 2vw;
    font-size: 1.5vw;
  }

  input {
    height: 8vh;
  }

  textarea {
    height: 20vh;
  }

  label {
    position: absolute;
    left: 10px;
    top: -8.5px;
    padding: 0px 3px;
    background-color: white;
    font-size: 1.2rem;
  }
`;

export default Lower;
