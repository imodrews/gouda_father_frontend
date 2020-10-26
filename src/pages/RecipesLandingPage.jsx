import React from "react";
import LPRecipeCards from "../components/LPRecipeCards";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../css/RecipeLandingPage.css";

const RecipesLandingPage = ({ recipes }) => {
	return (
		<div>
			<Jumbotron id="homePageJumbotron" fluid>
				<Container>
					<p id="theGoudaFather">The Goudafather</p>
					<p id="CheeseIsLife">Cheese is our life.</p>
				</Container>
			</Jumbotron>
			<LPRecipeCards recipes={recipes} />
		</div>
	);
};

export default RecipesLandingPage;
