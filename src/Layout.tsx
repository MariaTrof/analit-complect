import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App";

const Layout: React.FC = () => {


  return (
<BrowserRouter>
			<App>
				<Routes>
					<Route element={<></>} path="/" />
					<Route element={<></>} path="/catalogue" />
					<Route element={<></>} path="/shipping" />
					<Route element={<></>} path="/reviews" />
					<Route element={<></>} path="/services" />
					<Route element={<></>} path="/news" />
					<Route element={<></>} path="/contacts" />
				</Routes>
			</App>
		</BrowserRouter>
  );
};

export default Layout;