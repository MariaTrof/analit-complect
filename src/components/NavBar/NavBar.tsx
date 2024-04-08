import { FC } from "react";
import cls from "./NavBar.module.scss";
//import { Route, Routes } from 'react-router-dom';
import Contacts from "../../pages/contacts/Contacts";
//import Mail from "../../pages/mail/Mail";

const NavBar: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.nav}>
        <div className={cls.content}>
          <div className={cls.info}>
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
