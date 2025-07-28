import React from "react";
import FileExplorer from "./components/FileExplorer";
import fileData from "./data";
import "./App.css";
const App = () => {
  return <FileExplorer data={fileData} />;
};

export default App;
