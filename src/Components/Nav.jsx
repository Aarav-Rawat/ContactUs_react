import styled from "styled-components"

const Nav = () => {
  return (
    <>
    <Container>
      <nav>
        <img src="https://e7.pngegg.com/pngimages/222/873/png-clipart-contact-us-icon-email-iphone-telephone-computer-icons-contact-miscellaneous-blue.png" alt="" />
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>

      </nav>
    </Container>

    </>
  )
}

const Container = styled.div`
  nav{
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5vw;
}

nav img{
  width: 10vw;
  height: 10vh;
}

nav ul{
  display: flex;
  gap: 4vw;
  font-weight: 700;
  font-size: 1.8vw;
}
`

export default Nav