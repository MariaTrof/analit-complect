import { FC } from "react";
import cls from "./System.module.scss";
import Table from "../../assets/scott-webb--udZnjsCzsE-unsplash.jpg";

const System: FC = () => {
  return (
    <>
      <div className={cls.container}>
        <div className={cls.head}>
          <div className={cls.title}>Системы Экологического Мониторинга</div>
        </div>
        <div className={cls.content}>
          <div className={cls.text_box}>
            <br />
            <div className={cls.text}>
              <div className={cls.about}>
                Системы Экологического Мониторинга
              </div>
              В разработке
              <br />
              <div className={cls.about}></div>
              <br />
            </div>
            <div className={cls.block_img_box}>
              <img src={Table} className={cls.img_first} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default System;
