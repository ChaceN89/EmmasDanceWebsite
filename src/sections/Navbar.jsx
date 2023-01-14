import React from 'react'
import NavbarLink from '../components/NavbarLink'

function Navbar() {
  return (
    <nav className=' bg-yellow-400 p-4'>
        <NavbarLink name={"LOGO."} linkTo={"/"}/>
        <NavbarLink name={"Pricing"} linkTo={"/Pricing"}/>
        <NavbarLink name={"Register"} linkTo={"/Register"}/>
        <NavbarLink name={"ClassInfo"} linkTo={"/ClassInfo"}/>
        <NavbarLink name={"Handbook"} linkTo={"/Handbook"}/>
        <NavbarLink name={"Clothing"} linkTo={"/Clothing"}/>
        <NavbarLink name={"Schedule"} linkTo={"/Schedule"}/>
    </nav>
  )
}

export default Navbar
