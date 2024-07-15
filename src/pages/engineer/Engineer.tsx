import { FC } from "react";
import cls from "./Engineer.module.scss";
import Scetch from "../../assets/car.jpg";
//import Lab from "../../assets/kate-sade-2zZp12ChxhU-unsplash.jpg";

const Engineer: FC = () => {
  return (
    <>
      <div className={cls.container}>
        <div className={cls.head}>
          <div className={cls.title}>Инжиниринг</div>
        </div>
        <div className={cls.content}>
          <div className={cls.text_box}>
            <div className={cls.block_img_box}>
              <img src={Scetch} className={cls.img_first} />
            </div>
            <div className={cls.text}>
              <br />
              В Разработке
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engineer;
