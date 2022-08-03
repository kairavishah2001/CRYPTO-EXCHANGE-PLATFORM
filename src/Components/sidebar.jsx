import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { RiLoginBoxFill } from "react-icons/ri";
import logo from "../assets/logo.png";
import { Aside, Logo, SideBarLink } from "../styles";
import { SubMenu } from "./SubMenu";

export default function SideBar() {
  return (
    <Aside>
      <Logo src={logo} alt="logo" />
      <SideBarLink activeClassName="active" to="/home">
        <AiFillHome /> Home
      </SideBarLink>
      <SideBarLink activeClassName="active" to="/send&receive">
        <BiTransferAlt />
        Send & Receive
      </SideBarLink>

      <SideBarLink activeClassName="active" to="/setting">
        <AiFillSetting />
        Settings
      </SideBarLink>
      <SideBarLink activeClassName="active" to="/logout">
        <RiLoginBoxFill />
        logout
      </SideBarLink>

    </Aside>
  );
}
