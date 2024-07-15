import { FC, PropsWithChildren } from "react";
import cls from "./Layout.module.scss";
import Footer from "./components/Footer/Footer";
import { UpBox } from "./components/Up/UpBox";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cls.container}>
      <div className={cls.app}>
        <div className={cls.header}>
          <UpBox />
          {children}
        </div>
        <div className={cls.side}></div>
        <div className={cls.foot}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
