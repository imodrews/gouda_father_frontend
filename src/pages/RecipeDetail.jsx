import React from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../css/RecipeLandingPage.css";

const RecipeDetail = ({ recipes }) => {
	let { slug } = useParams();

	return (
		<div>
			{recipes.length >= 1 &&
				recipes
					.filter((recipe) => recipe.slug === slug)
					.map((recipe) => (
						<div>
							<Card.Title id= "recipeTitle">
								<p>{recipe.title}</p>
							</Card.Title>

							<Card id="recipeDetailCard">
								<Card.Img
									variant="top"
									width="40%"
									height="50%"
									src={
										recipe.featureImage
									}
									alt="Card image cap"
								/>

								<p id="RPIngredients">Ingredients</p>
								<Card.Text id="ingredients">
									{recipe.ingredients}
								</Card.Text>
								<Card.Text>
									<p id="RPMethod">Method</p>
									<div id="RPmethodDetails">
										{documentToReactComponents(
											recipe.description
										)}
									</div>
								</Card.Text>
							</Card>
						</div>
					))}
			{/* <RecipeDetailTemplate recipes={recipes} /> */}
		</div>
	);
};
export default RecipeDetail;
