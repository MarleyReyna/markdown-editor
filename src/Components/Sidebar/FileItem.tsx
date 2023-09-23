import { getDate } from '../../utils/getDate';
import { useDispatch } from "react-redux";
import { setCurrent } from "../../Redux/filesSlice";
import { type FileProps } from '../../lib/types';

const FileItem = ({item, index}: FileProps) => {
    const dispatch = useDispatch();

    return (
        <li>
            <img src="/assets/icon-document.svg" alt="document" />
            <button onClick={() => dispatch(setCurrent(index))}>
                <span>{getDate(item.createdAt)}</span>
                {item.name}
            </button>
        </li>
    );
}
 
export default FileItem;