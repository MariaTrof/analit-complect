import { FC, PropsWithChildren } from "react";
import cls from "./Layout.module.scss";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
      <div className={cls.app}>
        <div className={cls.header}>
          <Header />
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
