import React, { useState, useEffect } from "react";

// components
import Logo from "./Logo";
import Nav from "./Nav";
import NavRightSide from "./NavRightSide";
import DropMenu from "./DropMenu";

function Home() {
  const [active, setActive] = useState(false);

  const handleDropMenu = () => {
    setActive(!active);
  };

  return (
    <div className="home">
      {active ? <DropMenu /> : null}
      <div className="home__left">
        <header className="home__header">
          <Logo />
          <Nav />
        </header>
        <div className="home__message">
          <p className="home__p">Hello I`m </p>
          <h1 className="home__h1"> Javascript</h1>
        </div>
      </div>
      <div className="home__right">
        <header className="home__header home__header--right">
          <NavRightSide />
          <div id="nav-toggle" className={active ? "active" : ""}>
            <span onClick={handleDropMenu} />
          </div>
        </header>
        <div className="home__message border--none">
          <p className="home__p display--none">Hello I`am</p>
          <h1 className="home__h1 color--dark ">Developer</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
