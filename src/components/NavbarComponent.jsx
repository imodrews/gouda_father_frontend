import React from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import logo from "../images/logo.png";

const NavbarComponent = () => {
	return (
		<Navbar>
			<Container>
				<Nav>
					<Navbar.Brand href="/">
						<Image
							src={logo}
							width="120"
							height="80"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
				</Nav>
				<Nav>
					<NavLink id="navmenu" to="/">Home</NavLink>
					<NavLink id="navmenu" to="/recipes">Recipes</NavLink>
					<NavLink id="navmenu" to="/blog">Blog</NavLink>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
