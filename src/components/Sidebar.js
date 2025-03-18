import React from 'react';

function Sidebar({ setActiveTab }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveTab('home')}>Home</li>
        <li onClick={() => setActiveTab('register')}>Cadastrar Empresa</li>
      </ul>
    </div>
  );
}

export default Sidebar;
