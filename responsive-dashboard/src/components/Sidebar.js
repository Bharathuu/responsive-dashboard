import React from 'react';
import { FaTh, FaTable, FaUser, FaSignInAlt, FaChartPie } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>HORIZON FREE</h2>
      <nav>
        <ul>
          <li><FaTh /> Dashboard</li>
          <li><FaChartPie /> NFT Marketplace</li>
          <li><FaTable /> Tables</li>
          <li><FaTh /> Kanban</li>
          <li><FaUser /> Profile</li>
          <li><FaSignInAlt /> Sign In</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
