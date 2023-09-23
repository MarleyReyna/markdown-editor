// Types for files and redux state
export type FileType = {
    id: number;
    createdAt: string;
    name: string;
    content: string;
}

export type FilesType = FileType[];

export type RootState ={
    files: {
        files: FilesType
        current: number
    };
    darkmode: {darkmode: boolean};
    showDelete: {showDelete: boolean};
    showMarkdown: {showMarkdown: boolean};
}

// Prop Types
export type FileProps = {
    item: FileType;
    index: number;
}