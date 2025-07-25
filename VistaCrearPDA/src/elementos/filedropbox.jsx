import React from "react";
import { useDropzone } from "react-dropzone";

const FileDropBox = () => {
  const onDrop = (acceptedFiles) => {
    console.log("Files dropped:", acceptedFiles);
    // Handle uploaded files here (e.g., send to server or store)
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropbox">
      <input className="dropbox-input" {...getInputProps()} />
      {isDragActive ? (
        <p className="dropbox-text">Suelta aquí los archivos</p>
      ) : (
        <p className="dropbox-text">Añade o arrastra el contenido</p>
      )}
    </div>
  );
};

export default FileDropBox;
