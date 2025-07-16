import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { ReactComponent as UserIcon } from "./assets/icons/Main.svg";
import { ReactComponent as BellIcon } from "./assets/icons/IconBell.svg";
import { ReactComponent as BarsIcon } from "./assets/icons/IconBars.svg";
import { ReactComponent as ChatIcon } from "./assets/icons/IconChatbox.svg";

const Navibar = () => {
  return (
    <nav className="vertical-navBar">
      <ul>
        <li>
          <Link to="/perfil">
            <UserIcon width={45} height={45} />
          </Link>
        </li>
        <li>
          <Link to="/datos">
            <BarsIcon width={40} height={40} />
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <ChatIcon width={40} height={40} />
          </Link>
        </li>
        <li>
          <Link to="/notificaciones">
            <BellIcon width={40} height={40} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navibar;
