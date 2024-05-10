import { FC, PropsWithChildren } from "react";
import cls from "./Layout.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cls.container}>
      <div className={cls.app}>
        <div className={cls.header}>
          <Header />
        </div>
        <div className={cls.side}>
          <SideBar />
          {children}
        </div>
        <div className={cls.foot}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
