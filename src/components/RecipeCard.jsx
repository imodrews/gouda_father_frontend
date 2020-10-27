import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "../css/RecipeLandingPage.css";

const RecipeCard = ({ recipe }) => {
	/*const {
		title,
		shortDescription,
		quickFacts,
		featureImage,
		slug,
	} = recipes; */ 
	console.log(recipe)

	return (

		<Link to={`/recipes/${recipe.slug}`} id="cardlink">
			<Card id="homepageCards">
{/* 				<Card.Img
					variant="top"
					src={recipes.featureImage}
					alt={`image of ${recipes.title}`}
				/> */}
				<Card.Body>
					<Card.Title key={recipe.title} id="lpTitle">{recipe.title}</Card.Title>
					<Card.Text id="lpDescription">{recipe.shortDescription}</Card.Text>
					<Card.Text>
						
								<Badge variant="dark">
									{recipe.quickFacts}
								</Badge>
							
					</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
};

export default RecipeCard;
