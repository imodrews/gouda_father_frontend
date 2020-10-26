import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const JumbotronComponent = () => {
	return (
		<Jumbotron className="jumbotron-image" fluid>
			<Container>
				<h1>Test</h1>
				<p>It all works fine</p>
			</Container>
		</Jumbotron>
	);
};

export default JumbotronComponent;
