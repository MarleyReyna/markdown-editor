import FileItem from "./FileItem";
import {type FileType, RootState} from "../../lib/types";
import { useSelector, useDispatch } from "react-redux";
import { addNewFile, setCurrent } from "../../Redux/filesSlice";

const SidebarTop = () => {
  const dispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files.files);

  const createDocument = () => {
    // Create new file object
    let utc = new Date();
    let date =
      utc.getMonth() + 1 + "-" + utc.getDate() + "-" + utc.getFullYear();

    const newDoc = {
      id: files.length,
      createdAt: date,
      name: "untitled-document.md",
      content: "",
    };

    // Sets current index to new file and appends it to the end
    console.log(newDoc)
    dispatch(setCurrent(files.length));
    dispatch(addNewFile(newDoc));
  };

  return (
    <div className="topSide">
      <img src="/assets/logo.svg" alt="Markdown" className="sideLogo" />
      <h1>My documents</h1>
      <button className="addDoc" onClick={createDocument}>
        + New Document
      </button>
      <ul>
        {files.map((item: FileType, index: number) => {
          return (
            <FileItem item={item} index={index} key={index}/>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarTop;
