import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <main>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shows">Superheros</NavLink>
                <NavLink to="/search">Game</NavLink>
            </nav>
        </header>
        <Outlet />
    </main>
  )
}