import { FC } from "react";
import cls from "./About.module.scss";
import Table from "../../assets/company1.jpg";

const About: FC = () => {
  return (
    <>
      <div className={cls.container}>
        <div className={cls.head}>
          <div className={cls.title}>О Компании</div>
        </div>
        <div className={cls.content}>
          <div className={cls.text_box}>
            <br />
            <div className={cls.text}>
              <br />
              <div className={cls.about}>О Компании</div>
              В разработке
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

export default About;
