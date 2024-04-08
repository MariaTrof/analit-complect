import { FC } from "react";
import { FiMail } from "react-icons/fi";
import {Link } from "react-router-dom";

import cls from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.head}>
        <div className={cls.logotext}>
          <div className={cls.text}>ООО "АНАЛИТ КОМПЛЕКТ"</div>
        </div>
        <div className={cls.email}>
          <Link to={"/mail"} className={cls.icon}>
            <FiMail />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
