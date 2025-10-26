import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

function Navbar() {

  const [isDemoOpen, setIsDemoOpen] =  useState(false);
  const [isExoOpen, setIsExoOpen] =  useState(false);

  function CloseAll(){
    setIsDemoOpen (false);
    setIsExoOpen (false);
  }

  return (
    <nav className="navbar">
          {/* Bases */}
          {isDemoOpen ? (
            <>
              <ul className="navbar-links-open"  onClick={() => {CloseAll()}} onMouseLeave={() => {CloseAll()}}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/intro-composant">Composant</Link></li>
              <li><Link to="/conditions-collections">Conditions & Collections</Link></li>
              <li><Link to="/demo-evenements">Événements</Link></li>
              <li><Link to="/demo-hooks-state">Hooks & State</Link></li>
              <li><Link to="/demo-formulaires">Formulaires</Link></li>
              <li><Link to="/demo-communication">Communication</Link></li>
        </ul>
            </>
          ) : (
            <button className="bg-white p-05 rounded" onClick={() => setIsDemoOpen(true)}>Demo</button>
          )}
          {/* Exo */}
          {isExoOpen ? (
            <>
              <ul className="navbar-links-open" onClick={() => {CloseAll()}} onMouseLeave={() => {CloseAll()}}>
                <li><Link to="/exo-creation-composant">Exo Composant</Link></li>
                <li><Link to="/exo-creation-liste">Exo Liste</Link></li>
                <li><Link to="/exo-compteur">Exo Compteur</Link></li>
                <li><Link to="/exo-calculatrice">Exo Calculatrice</Link></li>
                <li><Link to="/exo-todo-list">Exo Todo List</Link></li>
              </ul>
            </>
          ) : (
            <button className="bg-white p-05 rounded" onClick={() => setIsExoOpen(true)}>Exo</button>
          )}
    </nav>
  );
}

export default Navbar;