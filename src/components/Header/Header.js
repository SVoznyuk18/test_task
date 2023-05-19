import React from "react";

import logo from "AssetsRoot/svg/logo.svg";
import { ClassicButton } from "ComponentsRoot";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <div className="header__buttonsSection">
        <ClassicButton style={{ marginRight: "10px", width: "100px" }}>
          Users
        </ClassicButton>
        <ClassicButton style={{ width: "100px" }}>Sign up</ClassicButton>
      </div>
    </header>
  );
};

export default Header;