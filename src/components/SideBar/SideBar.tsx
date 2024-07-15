import { FC, useEffect, useLayoutEffect, useState } from "react";
import cls from "./SideBar.module.scss";
import { Link } from "react-router-dom";
import List from "../../assets/list.png";
import React from "react";

const SideBar: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [lastActionWasCollapse, setLastActionWasCollapse] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1208);
    console.log("is mobile now", isMobile);
  };
  useLayoutEffect(() => {
    handleResize();
  }, []);

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    if (lastActionWasCollapse) {
      setCollapsed(false);
      setLastActionWasCollapse(false);
      setLastActionWasCollapse(false);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      <div className={cls.container}>
        <div className={cls.box}>
          <div className={cls.list}>
            <button onClick={onToggle} className={cls.btn}>
              <img src={List} className={cls.btn_icon} />
            </button>
            <ul className={cls.links + (collapsed ? " " + cls.collapsed : "")}>
              <Link to="/system" className={cls.link} onClick={onToggle}>
                Системы Экологического Мониторинга
              </Link>
              <Link to="/moblab" className={cls.link} onClick={onToggle}>
                Мобильные Лаборатории
              </Link>
              <Link to="/service" className={cls.link} onClick={onToggle}>
                Техническое Обслуживание
              </Link>
              <Link to="/engineer" className={cls.link} onClick={onToggle}>
                Инжиниринг
              </Link>
              {isMobile && (
                <React.Fragment>
                  <Link to="/about" className={cls.link} onClick={onToggle}>
                    О Компании
                  </Link>
                  <Link to="/news" className={cls.link} onClick={onToggle}>
                    Новости
                  </Link>
                  <Link to="/contacts" className={cls.link} onClick={onToggle}>
                    Контакты
                  </Link>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
