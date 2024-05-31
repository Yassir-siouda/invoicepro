import React, { useState } from 'react';
import './Menu.css';
import logo from '../images/InvoicePro.png'

import {
  FaRegChartBar,
  FaUser,
  FaBars
} from 'react-icons/fa';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
   
    window.location.href = '/';
  };

  return (
    <div className="app">
      <button className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li><a href="/facture" className="nav-link active"><FaRegChartBar /> Facture</a></li>
            <li><a href="/facture-affichage" className="nav-link"><FaRegChartBar /> Affichage Facture</a></li>
            <li><a href="/devis" className="nav-link"><FaRegChartBar /> Devis</a></li>
            <li><a href="/devis-affichage" className="nav-link"><FaRegChartBar /> Affichage Devis</a></li>
            <li><a href="/clients" className="nav-link"><FaRegChartBar /> Clients</a></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <a href="/profile/18" className="footer-link"><FaUser /> Profile</a>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      </aside>

      
    </div>
  );
};

export default App;
