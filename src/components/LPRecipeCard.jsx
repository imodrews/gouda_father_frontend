import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/RecipeLandingPage.css";

const LPRecipeCard = ({ recipes, history }) => {
	return (
		<Link to={`/recipes/${recipes.slug}/`}>
			<Card id="lpRecipeCard">
				<Card.Img
					variant="top"
					src={recipes.featureImage}
					alt="Card image cap"
				/>
				<Card.Body>
					<Card.Title id="lpTitle">{recipes.title}</Card.Title>
					<Card.Text id="lpDescription">
						{recipes.shortDescription}
					</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
};

export default LPRecipeCard;
