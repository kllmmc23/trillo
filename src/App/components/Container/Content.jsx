import React from "react";
import Sidebar from "./Content/Sidebar";
import Main from "./Content/Main";

const Content = () => {
  return (
    <div className='content'>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Content;
