import { FC } from "react";
import { FiMail } from "react-icons/fi";
import cls from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.head}>
        <div className={cls.logotext}>
          <div className={cls.text}>ООО "АНАЛИТ КОМПЛЕКТ"</div>
        </div>
        <div className={cls.email}>
          <a className={cls.icon}>
            <FiMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
