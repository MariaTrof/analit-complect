import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Email from "../../assets/email-64.png";
import Logo from "../../assets/LOGO-01.png";
import cls from "./Header.module.scss";

const Header: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1208);
  };
  return (
    <div className={cls.box}>
      <div className={cls.container}>
        <div className={cls.logotext}>
          <Link to="/">
            <img src={Logo} className={cls.logo} />
          </Link>
        </div>
        {isMobile ? null : (
          <div className={cls.contact}>
            <div className={cls.list}>
              <ul className={cls.links}>
                <Link to="/about" className={cls.link}>
                  О Компании
                </Link>
                <Link to="/news" className={cls.link}>
                  Новости
                </Link>
                <Link to="/contacts" className={cls.link}>
                  Контакты
                </Link>
              </ul>
              <Link to="/mail">
                <img src={Email} className={cls.img} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
