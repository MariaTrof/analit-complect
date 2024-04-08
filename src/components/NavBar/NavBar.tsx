import { FC } from "react";
import cls from "./NavBar.module.scss";
import Contacts from "../../pages/contacts/Contacts";

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
