import React from 'react';

const SideBar: React.FC = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg'>
      <i>A</i>
      <i>B</i>
      <i>C</i>
      <i>D</i>
      <i>E</i>
    </div>
  );
};

const SideBarIcon: React.FC = ({ icon }) => {
  <div className='sidebar-icon'>{icon}</div>;
};

export default SideBar;