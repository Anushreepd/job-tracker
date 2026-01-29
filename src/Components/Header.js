import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <h1>Job Tracker</h1>
        <nav>
            <NavLink to="/jobs" >JOBS</NavLink>
            <NavLink to="/add-job">ADD JOB</NavLink>
        </nav>
    </>
  )
}

export default Header
