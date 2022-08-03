import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {SubNav} from './SubNav';
export const SubMenu = ({ item, isOpen }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const [submenu, setSubmenu] = useState(false);
  const showSubMenu = () => setSubmenu(!submenu);
  return (
    <>
     <li className="sidebarItem">
     <NavLink
        to={item.path}
        className='sidebarTwoLink'
        onClick={item.subNav && showSubnav}
        activeClassName='is-active'
      >
          {item.icon}
          <span className="link-text">
               {item.title}
          </span>
        <div className="dropdownIcon">
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </NavLink>
     </li>
      {subnav &&
        item.subNav.map((subNavItem) => {
          return (
            <>
            <NavLink to={subNavItem.path}
            className={isOpen ? 'dropdownLink' : 'd-none'}
            onClick={subNavItem.subMenu && showSubMenu}
            activeClassName='is-active'>
              {subNavItem.icon}
              <span className="dropdown-text">
               {subNavItem.title}
             </span>
            </NavLink>
            {submenu && isOpen ? <SubNav item={subNavItem}/> : null}
            </>
          );
        })}
    </>
  );
};