import React from 'react'
import Header from "../ComponentsPageTwo/Header"
import Main from "../ComponentsPageTwo/AboutMain"
import MainBlock from "../ComponentsPageTwo/MainBlock"
import { Link, Outlet } from 'react-router-dom'
function About() {
  return (
    <div className='bg-black'>
      <Link to={'/about'}>
      <Header/>
      <Main/>
      <MainBlock/>
      </Link>
    </div>
  )
}

export default About