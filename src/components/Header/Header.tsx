import { FC } from "react";
import { Link } from "react-router-dom";
import Phone from "../../assets/85d5c474-8de7-487e-99a6-7dc10e07fa9b_pixelied-one-tree-hill.svg";
import Email from "../../assets/f46636d7-a94b-421c-aa61-8f52a6443f5b_pixelied-i-love-lucy.svg";
import Logo from "../../assets/LOGO-01.png";
import cls from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.head}>
        <div className={cls.logotext}>
          <Link to="/main">
            <img src={Logo} className={cls.logo} />
          </Link>

          <div className={cls.text}>
            <div className={cls.list}>
              <ul className={cls.links}>
                <Link to="/about" className={cls.link}>
                  О Компании
                </Link>
                <Link to="/about" className={cls.link}>
                  Новости
                </Link>
                <Link to="/contacts" className={cls.link}>
                  Контакты
                </Link>

                <Link to="/service" className={cls.link}>
                  Технического Обслуживание
                </Link>
                <Link to="/engineer" className={cls.link}>
                  Инженеринг
                </Link>
                <br />
                <Link to="/moblab" className={cls.link}>
                  Мобильные Лабратории
                </Link>
                <Link to="/system" className={cls.link}>
                  Системы Экологического Мониторинга
                </Link>
              </ul>
            </div>
          </div>
          <div className={cls.contact}>
            <img src={Phone} className={cls.img}></img>
            <img src={Email} className={cls.img}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
