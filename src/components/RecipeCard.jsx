import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "../css/RecipeLandingPage.css";

const RecipeCard = ({ recipe }) => {
	

	return (

		<Link to={`/recipes/${recipe.slug}`} id="cardlink">
			<Card id="homepageCards">
				<Card.Img
					variant="top"
					src={recipe.imageurl}
					alt={`image of ${recipe.title}`}
				/>
				<Card.Body>
					<Card.Title key={recipe.title} id="lpTitle">{recipe.title}</Card.Title>
					<Card.Text id="lpDescription">{recipe.shortdescription}</Card.Text>
					<Card.Text>
						
								<Badge variant="dark" id="quickfacts">
									{recipe.quickfacts}
								</Badge>
							
					</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
};

export default RecipeCard;
