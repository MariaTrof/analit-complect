import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import cls from "./UpBox.module.scss";

export const UpBox = () => {
  return (
    <>
      <div className={cls.container}>
        <div className={cls.content}>
          <div className={cls.head}>
            <Header />
          </div>
          <div className={cls.side}>
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};
