import React from "react";
import { Link } from "react-router-dom";

/* import bootstrap */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../index.css";

const FooterComponent = ({ authors }) => {
		
	return (
		<Navbar className="footer" bg="black">
			<Container id="madeWithLove">
				<p id="madeWithLove">Made with Love by</p>
				<ButtonGroup>
					{authors.length >= 1 &&
						authors.map((author, index) => (
							<Link
								key={index}
								to={`/authors/${author.slug}`}
							>
								<Button
									variant="secondary"
									key={index}
									authors={authors}
									color="white"
								>
									{author.name}
									
								</Button>
							</Link>
						))}
				</ButtonGroup>
			</Container>
		</Navbar>
	);
};

export default FooterComponent;
