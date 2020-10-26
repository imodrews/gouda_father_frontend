import React from "react";
import { Link } from "react-router-dom";

/* import bootstrap */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const FooterComponent = ({ authors }) => {
	return (
		<Navbar className="footer" bg="light">
			<Container>
				Made with Love by
				<ButtonGroup>
					{authors.length >= 1 &&
						authors.map((author, index) => (
							<Link
								key={index}
								to={`/authors/${author.fields.slug}`}
							>
								<Button
									variant="secondary"
									key={index}
									authors={authors}
								>
									{author.fields.name}
								</Button>
							</Link>
						))}
				</ButtonGroup>
			</Container>
		</Navbar>
	);
};

export default FooterComponent;
