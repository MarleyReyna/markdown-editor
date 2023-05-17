import React from "react";
import SidebarTop from "./SidebarComponents/SidebarTop";
import SidebarBottom from "./SidebarComponents/SidebarBottom";

const Sidebar = () => {
  return (
    <section className="sideMenu">
      <SidebarTop />
      <SidebarBottom />
    </section>
  );
};

export default Sidebar;
