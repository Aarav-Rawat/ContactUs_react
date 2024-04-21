import styled from "styled-components"
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Form = () => {

  return (
    <Div>
       <div className="btn">
       <Button text="VIA SUPPORT CHAT" icon={<MdMessage/>} />
       <Button  text="VIA CALL" icon={<IoCall/>} />
       <Button text="VIA EMAIL FORM" icon={<MdEmail/>}/>
       </div>
    </Div>

  )
}

const Div = styled.div`
.btn{
    display: flex;
   gap: 2vw;
   align-items: center;
   justify-content: center;
    margin-top: 2vw;
}
`


export default Form