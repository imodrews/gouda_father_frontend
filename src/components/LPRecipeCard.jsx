import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/RecipeLandingPage.css";

const LPRecipeCard = ({ recipe, history }) => {
	const { title, slug, shortDescription, featureImage } = recipe.fields;

	return (
		<Link to={`/recipes/${slug}/`}>
		<Card id="lpRecipeCard" >
			<Card.Img
				variant="top"
				src={featureImage.fields.file.url}
				alt="Card image cap"
			/>
			<Card.Body>
				<Card.Title id="lpTitle">{title}</Card.Title>
				<Card.Text id="lpDescription">{shortDescription}</Card.Text>
				
					
			
			</Card.Body>
		</Card>
			</Link>
	);
};

export default LPRecipeCard;
