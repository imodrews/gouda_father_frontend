import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import "../css/RecipeLandingPage.css";

const LPRecipeCard = ({ recipe, history }) => {
	return (
		<Link to={`/recipes/${recipe.slug}/`}>
			<Card id="lpRecipeCard">
				<Card.Img
					variant="top"
					src={recipe.imageurl}
					alt="Card image cap"
				/>
				<Card.Body>
					<Card.Title id="lpTitle">{recipe.title}</Card.Title>
					<Card.Text id="lpDescription">
						{recipe.shortDescription}
					</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
};

export default LPRecipeCard;
