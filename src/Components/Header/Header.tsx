import { useSelector } from "react-redux";
import {type RootState} from "../../lib/types";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode);

  return (
    <section className={darkmode ? "header dark" : "header"}>
      <HeaderLeft />
      <HeaderRight />
    </section>
  );
};

export default Header;
