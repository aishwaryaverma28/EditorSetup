import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SubMenu = (item) => {
    const [open,  setOpen] = useState(false)

    if(item.subNav){
  return (
    <div className={open?'sidebar-item open' : 'sidebar-item'}>
        <div className='sidebar-title' onClick={() => setOpen(!open)}>
            <span>
                {item.title}
            </span>
            <i className="fa-sharp fa-solid fa-angle-down toggle-btn"></i>
        </div>
        <div className='sidebar-content'>
        { item.subNav.map((child, index) => <SubMenu key={index} {...child} />) }
        </div>
    </div>
  )
    }

    else{
        return (
            <div className='sidebar-item'>
            <Link to={item.path || "#"} className='sidebar-title plain'>
                {item.title}
            </Link>
            </div>
          )     
    }
}

export default SubMenu