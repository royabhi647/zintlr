import React from "react";
import Feed from "./component/Feed";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
function App() {
  return (
    <div className="bg-white">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Topbar />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
