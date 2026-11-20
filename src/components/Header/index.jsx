import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.webp";

export default function Header() {
  return (
    <main>
      <header className="main-header">
        <div className="header-logo">
          <img src={logo} alt="HeroVerse logo" />
        </div>

        <nav className="header-nav">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/superheros">Superheroes</NavLink>

          <NavLink to="/game">Game</NavLink>
        </nav>
      </header>

      <Outlet />
    </main>
  );
}
