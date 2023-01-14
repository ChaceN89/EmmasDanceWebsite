/**
 * Footer component at the bottom of the page
 */
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=" text-lg bg-pink-800 bg-opacity-10 py-6 mt-4">
      <div className="container mx-auto flex justify-around">

        <div>Footer Text</div>

        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/Volunteer"}>Volunteer</Link>
        
      </div>
    </footer>
  )
}

export default Footer