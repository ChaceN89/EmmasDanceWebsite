/**
 * Page that is called when the route is unknown to router
 * returns back to home page using Navigate
 */
import React from 'react'
import { Navigate } from "react-router-dom";

export default function PageNotFound() {
  // return navigate back to home page
  return ( <Navigate to="/" replace={true} /> )

}
