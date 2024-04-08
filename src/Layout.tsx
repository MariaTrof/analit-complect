import { FC, PropsWithChildren } from 'react';
import cls from "./Layout.module.scss";
import Copyright from "./components/copyright/Copyright";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";




const Layout: FC<PropsWithChildren> = ({children}) => {

  return (
    <div>
		{children}
      <div className={cls.app}>
        <div className={cls.header}>
          <Header />
        </div>
        <div className={cls.content}>
           <div className={cls.side}>
          <SideBar />
        </div>
        <div className={cls.container}>
          <NavBar />
        </div>
          </div> 
       
      </div>
      <Copyright />
    </div>
  
  );
};

export default Layout;