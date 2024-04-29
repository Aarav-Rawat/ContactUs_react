import styled from "styled-components"

const Contact = () => {
  return (
    <Div>
        <h4>Contact Us</h4>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
    </Div>
  )
}

const Div = styled.div`
   margin: -1vw 15vw;
    h4{
        font-size: 4vw;
        font-weight: 900;
    }

    p{
        font-weight: 400;
        color: gray;
      
    }
`

export default Contact