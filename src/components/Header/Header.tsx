import { FC } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO-01.png";
import cls from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.head}>
        <div className={cls.logotext}>
          <div className={cls.text}>
            <img src={Logo} className={cls.logo}></img>
          </div>
        </div>
        <div className={cls.email}>
          <Link to={"/mail"} className={cls.icon}>
            <MdAlternateEmail />
          </Link> 
        <a className={cls.icon}>
          <FiPhoneCall />
          </a>  
        </div>
      </div>
    </div>
  );
};

export default Header;
