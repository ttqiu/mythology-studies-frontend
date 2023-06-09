import { Link } from 'react-router-dom'
// import { useState } from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'

const Nav = ({ user, handleLogOut, account }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://i.imgur.com/dZoAPhy.png"
            alt="welcome banner"
          />
        </div>
        <div style={{ fontWeight: 'bolder' }} className="icon-wrapper">
          <h1 className="welcome">Welcome {account.userName}!</h1>
          <Link to="/lobby">
            <HomeIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link onClick={handleLogOut} to="/">
            <ArrowLeftOnRectangleIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link to="/creatures">Creatures</Link>
          <Link to="/account">
            <UserCircleIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          {user.id === 27 && (
            <div>
              <Link to="/creatures/add">Add Creatures</Link>
              <Link to="/origins/add">Add Origin</Link>
            </div>
          )}
          <Link to="/about">
            <InformationCircleIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <div className="logo-wrapper" alt="logo">
        <img
          className="logo"
          src="https://i.imgur.com/dZoAPhy.png"
          alt="welcome banner"
        />
      </div>
      <div className="icon-wrapper" style={{ fontWeight: 'bolder' }}>
        <Link to="/">
          <HomeIcon className="h-5 w-5" aria-hidden="true" />
          <label>Home</label>
        </Link>
        <Link to="/register">
          <UserPlusIcon className="h-5 w-5" aria-hidden="true" />
          <label>Register</label>
        </Link>
        <Link to="/signIn">
          <ArrowRightOnRectangleIcon className="h-5 w-5" aria-hidden="true" />
          <label>Sign In</label>
        </Link>
        <Link to="/about">
          <InformationCircleIcon className="h-5 w-5" aria-hidden="true" />
          <label>About</label>
        </Link>
      </div>
    </nav>
  )

  return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
