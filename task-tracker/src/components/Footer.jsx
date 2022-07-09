import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className='mt-5'>
      <p>Copyright Ⓒ 2022</p>
      <Link to="/about">about</Link>
    </footer>
  )
}
