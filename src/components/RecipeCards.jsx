import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import RecipeCard from "./RecipeCard";

const RecipeCards = ({ recipes }) => {
	const shuffled = recipes.sort(() => 0.5 - Math.random());
	const selected = shuffled.slice(0, 4);

	return (
		<Container>
			<CardGroup id="cardgroup">
				{selected.length >= 1 &&
					selected.map((recipe, index) => (
						<RecipeCard recipe={recipe} key={index} />
					))}
			</CardGroup>
		</Container>
	);
};

export default RecipeCards;
