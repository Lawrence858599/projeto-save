import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CompanyRegistration from './CompanyRegistration';

function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="home-container">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="main-content">
        {activeTab === 'register' ? (
          <CompanyRegistration />
        ) : (
          <h1>Bem-vindo à Home!</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
