//import  Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import cls from "./App.module.scss";
import Copyright from "./components/copyright/Copyright";

function App() {
  return (
    <div>
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
}

export default App;
