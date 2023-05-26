import React from "react";
import HeaderLeft from "./HeaderComponents/HeaderLeft";
import HeaderRight from "./HeaderComponents/HeaderRight";
import { useSelector } from "react-redux";

const Header = () => {
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  return (
    <section className={darkmode ? "header dark" : "header"}>
      <HeaderLeft />
      <HeaderRight />
    </section>
  );
};

export default Header;
