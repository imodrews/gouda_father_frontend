import React, { useState, useEffect } from "react";

// router //
import { Switch, Route } from "react-router-dom";

// contentful client //
import { client } from "./client.js";

// importing pages //
import HomePage from "./pages/HomePage";
import RecipesLandingPage from "./pages/RecipesLandingPage";
import BlogLandingPage from "./pages/BlogLandingPage";
import AuthorDetail from "./pages/AuthorDetail";
import BlogDetail from "./pages/BlogDetail";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";

// importing components //
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

const App = () => {
	// set up the states //
	const [recipes, setRecipes] = useState([]);
	const [blogData, setBlogData] = useState([]);
	const [authors, setAuthors] = useState([]);

	// get all recipes (content_type = contentful) //
	useEffect(() => {
		fetch('https://gouda-father-backend.herokuapp.com/api/recipes')
			.then((res) => res.json())
			.then((data) => setRecipes(data))
			.catch((error) => console.log("NO FOOD FOR YOU!"));
	}, []);

	// get all blog posts (content_type = contentful) //
	useEffect(() => {
		fetch('https://gouda-father-backend.herokuapp.com/api/blogPost')
			.then((res) => res.json())
			.then((data) => setBlogData(data))
			.catch((error) => console.log("ERROR FETCHING CHEESE")); 

	}, []);

	// get all persons (content_type = contentful) //
	useEffect(() => {
		fetch("https://gouda-father-backend.herokuapp.com/api/authors")
			.then((res) => res.json())
			.then((data) => setAuthors(data))
			.catch((error) => console.log("ERROR FETCHING DATA"));
	}, []);

	return (
		<div className="App">
			<header>
				<NavbarComponent />
			</header>
			<main>
				<Switch>
					<Route
						path="/recipes/tag/:tags"
						render={(props) => (
							<RecipesLandingPage recipes={recipes} {...props} />
						)}
					/>
					<Route
						path="/recipes/:slug"
						render={(props) => (
							<RecipeDetail recipes={recipes} {...props} />
						)}
					/>
					<Route
						path="/authors/:slug"
						render={(props) => (
							<AuthorDetail authors={authors} {...props} />
						)}
					/>
					<Route
						path={"/blog/:slug"}
						render={(props) => (
							<BlogDetail blogData={blogData} {...props} />
						)}
					/>

					<Route
						path={"/add_recipe"}
						render={(props) => (
							<AddRecipe recipes={recipes} {...props} />
						)}
						/>
					<Route
						path="/recipes"
						render={(props) => (
							<RecipesLandingPage recipes={recipes} {...props} />
						)}
					/>
					<Route
						path="/blog"
						render={(props) => (
							<BlogLandingPage blogData={blogData} {...props} />
						)}
					/>
					<Route
						exact
						path="/"
						render={(props) => (
							<HomePage recipes={recipes} {...props} />
						)}
					/>
				</Switch>
			</main>
			<footer>
				<FooterComponent authors={authors} />
			</footer>
		</div>
	);
};

export default App;
