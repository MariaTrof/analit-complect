//import cls from "./App.module.scss";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./Layout";
import Contacts from "./pages/contacts/Contacts";
import Mail from "./pages/mail/Mail";
import Engineer from "./pages/engineer/Engineer";
import System from "./pages/system/System";
import Serv from "./pages/serv/Serv";
import Moblab from "./pages/moblab/Moblab";

function App() {
  return (
    <>
      <Layout />
      <Routes> 
        <Route element={<></>} path="/" />
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<Mail />} path="/mail" />
        <Route element={<></>} path="/about" />
        <Route element={<Moblab/>} path="/moblab" />
        <Route element={<Serv/>} path="/service" />
        <Route element={<System/>} path="/system" />
        <Route element={<Engineer/>} path="/engineer" />
      </Routes>
    </>
  );
}

export default App;
// <BrowserRouter>
//     <Layout>
//      <Routes>
//  //<Route element={<Mail />} path="/mail" />
//        <Route element={<Contacts />} path="/contacts" />
//        <Route element={<></>} path="/about" />
//        <Route element={<></>} path="/moblab" />
//        <Route element={<></>} path="/service" />
//        <Route element={<></>} path="/system" />
//        <Route element={<></>} path="/engener" />
//      </Routes>
//    </Layout>
//  </BrowserRouter>
