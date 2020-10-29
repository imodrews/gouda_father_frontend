import React from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../css/RecipeLandingPage.css";

const RecipeDetail = ({ recipes }) => {
	let { slug } = useParams();
	// const recipeDescription = recipes.description;
	// console.log(recipeDescription)
	// const splitDescription = recipeDescription.split(/\d[.]/g);
	
	return (
		<div>
			{recipes.length >= 1 &&
				recipes
					.filter((recipe) => {
						return recipe.slug === slug
					 })
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
									src={`${recipe.imageurl}`}
									alt="Card image cap"
								/>

								<p id="RPIngredients">Ingredients</p>
								<Card.Text id="ingredients">
									{recipe.ingredients}
								</Card.Text>
								<Card.Text>
									<p id="RPMethod">Method</p>
									 <div id="RPmethodDetails">

									 	<ol>
										 {recipe.description.split(/\d[.]/g).slice(1).map((step) => {
											 return <li>{step}</li>; 
										 }
										 )}
										
											
										</ol>
									</div>
								</Card.Text>
							</Card>
						</div>
					))}
		</div>
	);
};
export default RecipeDetail;
