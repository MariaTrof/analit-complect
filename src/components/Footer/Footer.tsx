import { FC } from "react";
import cls from "./Footer.module.scss";
import Copyright from "../copyright/Copyright";

const Footer: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.box}>
        <Copyright />
        <div className={cls.left}>
          <div className={cls.text}>Адрес:</div>
          <p>г. Москва, Кронштадтский бульвар, 7Ас1, Москва, 125212</p>
        </div>
        <div className={cls.right}>
          <div className={cls.text}>Телефон:</div>
          <p>+7 499 270 05 91</p>
        </div>
        <div className={cls.right}>
       
          <div className={cls.text}>Почта:</div>
          <p>ak405@inbox.ru</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
