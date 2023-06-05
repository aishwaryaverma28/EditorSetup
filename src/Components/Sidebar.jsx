import React from 'react'
import items from './SidebarData';
import "../Components/Styles/Sidebar.css";
import SubMenu from './SubMenu';

const Sidebar = () => {
  return (
    <div>
      {items.map((item,index) => <SubMenu key={index} {...item}/>) }
      
    </div>
  )
}

export default Sidebar