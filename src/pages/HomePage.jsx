import React from "react";
import RecipeCards from "../components/RecipeCards";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../css/RecipeLandingPage.css";


const HomePage = ({ recipes }) => {
	return (
		<>
			<Jumbotron id="homePageJumbotron" fluid>
				<Container>
					<p id="theGoudaFather">The Goudafather</p>
					<p id="CheeseIsLife">Cheese is our life.</p>
				</Container>
			</Jumbotron>
			<Container>
				<h2>Random recipes</h2>
				<RecipeCards recipes={recipes} />
			</Container>
		</>
	);
};

export default HomePage;
