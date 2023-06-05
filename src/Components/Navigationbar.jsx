import React from 'react';
import "../Components/Styles/Sidebar.css";
import userLogo from '../Components/Assets/employee.jpg'
import logoutIcon from '../Components/Assets/userIcon.svg';
import Sidebar from './Sidebar';

const NavigationBar = () => {
  return (
    <div>
      <img src="https://www.leadplaner.com/assetmain/images/leadplaner_logo.png" class="companyLogo"/>
      <hr/>
      <div class= "navigationBar">
        <div class="userLogoContainer">
          <div class="userLogo">
            <img src={userLogo} class="userLogoImg"/>
            <div class="userDesp">
              <h5>Raman</h5>
              <p>Client</p>
            </div>            
          </div>
          <img src={logoutIcon}/>
        </div>
        <Sidebar/>
      </div>
      
    </div>
  )
}

export default NavigationBar