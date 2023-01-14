import React from 'react'
import { Link } from 'react-router-dom'

function NavbarLink({name, linkTo}) {
  return (
    <Link to={linkTo}  className='hover:text-red-400 transition duration-400 ease-in-out  p-5'>
        {name}
    </Link>
  )
}

export default NavbarLink
