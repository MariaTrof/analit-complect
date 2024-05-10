import { Route, Routes } from "react-router-dom";
import cls from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Layout from "./Layout";
import Contacts from "./pages/contacts/Contacts";
import Mail from "./pages/mail/Mail";
import Engineer from "./pages/engineer/Engineer";
import System from "./pages/system/System";
import Serv from "./pages/serv/Serv";
import Moblab from "./pages/moblab/Moblab";
import About from "./pages/about/About";

function App() {
  return (
    <div className={cls.container}>
      <Layout>
        <Routes>
          <Route element={<NavBar />} path="/main" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<Mail />} path="/mail" />
          <Route element={<About />} path="/about" />
          <Route element={<Moblab />} path="/moblab" />
          <Route element={<Serv />} path="/service" />
          <Route element={<System />} path="/system" />
          <Route element={<Engineer />} path="/engineer" />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
