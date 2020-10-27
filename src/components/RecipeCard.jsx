import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "../css/RecipeLandingPage.css";

const RecipeCard = ({ recipes }) => {
	/*const {
		title,
		shortDescription,
		quickFacts,
		featureImage,
		slug,
	} = recipes; */ 

	return (
		<Link to={`/recipes/${recipes.slug}`} id="cardlink">
			<Card id="homepageCards">
				<Card.Img
					variant="top"
					src={recipes.featureImage}
					alt={`image of ${recipes.title}`}
				/>
				<Card.Body>
					<Card.Title key={recipes.title} id="lpTitle">{recipes.title}</Card.Title>
					<Card.Text id="lpDescription">{recipes.shortDescription}</Card.Text>
					<Card.Text>
						{recipes.length >= 1 &&
							recipes.quickFacts.map((quickFact, index) => (
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
