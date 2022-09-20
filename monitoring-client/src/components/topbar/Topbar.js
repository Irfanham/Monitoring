import React from "react";

import "./topbar.css";

import {
  ArrowDropDownOutlined,
  AccountCircleOutlined,
} from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Pupuk</span>
        </div>

        <div className="topRight">
          <span className="topbarIconContainer">
            <AccountCircleOutlined />
          </span>
          <span className="topbarIconContainer">
            <h4>Admin</h4>
          </span>
          <span className="topbarIconContainer">
            <ArrowDropDownOutlined />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
