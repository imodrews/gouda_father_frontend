import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "../css/RecipeLandingPage.css";

const RecipeCard = ({ recipe }) => {
	const {
		title,
		shortDescription,
		quickFacts,
		featureImage,
		slug,
	} = recipe.fields;

	return (
		<Link to={`/recipes/${slug}`} id="cardlink">
			<Card id="homepageCards">
				<Card.Img
					variant="top"
					src={featureImage.fields.file.url}
					alt={`image of ${title}`}
				/>
				<Card.Body>
					<Card.Title key={title} id="lpTitle">{title}</Card.Title>
					<Card.Text id="lpDescription">{shortDescription}</Card.Text>
					<Card.Text>
						{quickFacts.length >= 1 &&
							quickFacts.map((quickFact, index) => (
								<Badge variant="dark" key={index}>
									{quickFact}
								</Badge>
							))}
					</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);
};

export default RecipeCard;
