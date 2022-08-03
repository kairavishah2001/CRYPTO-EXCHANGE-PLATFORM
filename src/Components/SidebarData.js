import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    key: 'HOME',
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },
  {
      key: 'SendReceive',
      title: "Send & Receive",
      path: "/send&receive",
      icon: <BiIcons.BiTransferAlt />,
    },
  {
    key: 'SETTINGS',
    title: "Settings",
    path: "/settings",
    icon: <AiIcons.AiFillSetting />,
    iconClosed: <FiIcons.FiChevronDown size={20} />,
    iconOpened: <FiIcons.FiChevronUp size={20} />,
    subNav: [
      {
        key: 'PROFILE',
        title: "Profile",
        path: "/settings/profile",
        icon: null,
      },

      {
        key: 'SECURITY',
        title: "Security",
        path: "/settings/security",
        icon: null,

        },
        {
        key: 'NOTICATION',
        title: "Notification",
        path: "/settings/notification",
        icon: null,

        },
        {
        key: 'ABOUT',
        title: "About",
        path: "/settings/about",
        icon: null,

        },





    ],
  },
  {
      key: 'LOGOUT',
      title: "Log Out",
      path: "/logout",
      icon: <FiIcons.FiLogOut />,
    },
];