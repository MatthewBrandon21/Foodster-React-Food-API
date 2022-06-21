import React from "react";
import "./BaseLayout.css";

function BaseLayout({ children }) {
  return (
    <div className="baseLayout">
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className="title" >Foods Categories</h1>
      {children}
    </div>
  );
}

export default BaseLayout;
