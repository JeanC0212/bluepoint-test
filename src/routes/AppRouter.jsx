import React from "react";
import { Redirect, Route, Router } from "wouter";
import { Home } from "../pages/Home";
import { Navbar } from "../components/navbar/Navbar";
import { Contact } from "../pages/contact/Contact";


export const AppRouter = () => {
	return (
		<div>
			<Navbar />
			<Router>
				<Route path="/">
					<Redirect to={"/home"} />
				</Route>

				<Route path="/home" component={Home} />
				<Route path="/contact-us" component={Contact} />
				<Route path="*" component={() => <h1>404</h1>} />
			</Router>
		</div>
	);
};
