import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const FileExplorer = ({ data }) => {
  const [showChildren, setShowChildren] = useState(false);
  const handleToggle = () => {
    setShowChildren(!showChildren);
  };
  return (
    <>
      <div className="container">
        <div className="node" onClick={handleToggle}>
          {data.isFolder &&
            (showChildren ? <IoIosArrowDown /> : <IoIosArrowForward />)}
          {data.isFolder ? (showChildren ? "📂" : "📁") : "📃"}
          <span>{data.name}</span>
        </div>

        {showChildren &&
          data?.children &&
          data.children.map((childNode) => <FileExplorer data={childNode} />)}
      </div>
    </>
  );
};

export default FileExplorer;
