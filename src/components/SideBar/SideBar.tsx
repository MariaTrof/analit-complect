import { FC } from "react";
import cls from "./SideBar.module.scss";
import { Link } from "react-router-dom";

const SideBar: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.box}>
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

            <Link to="/moblab" className={cls.link}>
              Мобильные Лабратории
            </Link>
            <Link to="/system" className={cls.link}>
              Системы Экологического Мониторинга
            </Link>
            <Link to="/engineer" className={cls.link}>
              Инженеринг
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
