import React from "react";
import { NavLink } from "react-router-dom";
export const SubNav = ({ item }) => {
  return (
    <>
      {item.subMenu &&
        item.subMenu.map((subNavItem) => {
          return (
            <>
            <NavLink to={subNavItem.path} className='dropdownLink'
            activeClassName='is-active'>
              {subNavItem.icon}
              <span className="dropdown-text">
               {subNavItem.title}
             </span>
            </NavLink>
            </>
          );
        })}
    </>
  );
};