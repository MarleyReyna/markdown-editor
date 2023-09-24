import { type RootState } from "../../lib/types";
import { useSelector, useDispatch } from "react-redux";
import { setDarkmode } from "../../Redux/darkmodeSlice";

const SidebarBottom = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode);

  return (
    <div className={darkmode ? "darkContainer active" : "darkContainer"}>
      <img src="/assets/icon-dark-mode.svg" className="moon" alt="dark mode" />
      <button className="darkToggle" onClick={() => dispatch(setDarkmode())}>
        <img className="circle" src="/assets/icon-circle.png" alt="" />
        Toggle Darkmode
      </button>
      <img src="/assets/icon-light-mode.svg" className="sun" alt="light mode" />
    </div>
  );
};

export default SidebarBottom;
