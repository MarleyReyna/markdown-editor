import {type RootState} from "../../lib/types";
import Markdown from "./Markdown";
import Preview from "./Preview";
import { useSelector } from "react-redux";

const Editor = () => {
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode);

  return (
    <section className={darkmode ? "editor dark" : "editor"}>
      <Markdown />
      <Preview />
    </section>
  );
};

export default Editor;
