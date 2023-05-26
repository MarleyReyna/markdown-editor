import React from "react";
import SidebarTop from "./SidebarComponents/SidebarTop";
import SidebarBottom from "./SidebarComponents/SidebarBottom";

const Sidebar = () => {
  return (
    <header className="sideMenu">
      <SidebarTop />
      <SidebarBottom />
    </header>
  );
};

export default Sidebar;
