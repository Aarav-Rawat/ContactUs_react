import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav>

<div className="logo">
  <img src="./images/logo.png" alt="" />
</div>

  <ul>
    <li href="#">Home</li>
    <li href="#">Location</li>
    <li href="#">About</li>
    <li href="#">Contact</li>
  </ul>

  <button>Login</button>
</nav>
    </>
  )
}

export default Navbar