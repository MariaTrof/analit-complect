import { FC } from "react";
import cls from "./Footer.module.scss";
import Copyright from "../copyright/Copyright";

const Footer: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.box}>
        <div className={cls.foo}>
          <div className={cls.left}>
            <div className={cls.text}>Адрес:</div>
            <p className={cls.small_text}>
              г. Москва, 125212, Кронштадтский б-р, 7А, офис 315
            </p>
          </div>
          <div className={cls.right}>
            <div className={cls.text}>Телефон:</div>
            <p className={cls.small_text}>+7 499 270 05 91</p>
          </div>
          <div className={cls.right}>
            <div className={cls.text}>Почта:</div>
            <p className={cls.small_text}>ak405@inbox.ru</p>
          </div>
        </div>
        <div className={cls.cop}>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Footer;
