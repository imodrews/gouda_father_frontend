import React from "react";
import Container from "react-bootstrap/Container";
import JumbotronComponent from "../components/JumbotronComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

import "../css/BlogLandingPage.css";
import BlogEntryPreviews from "../components/BlogEntryPreviews";
import OlderBlogs from "../components/OlderBlogs";

const BlogLandingPage = ({ blogData }) => {

const sortedPublishedDateArray =  blogData.sort(
	(a, b) =>  new Date(b.fields.publishDate) - new Date(a.fields.publishDate)
);

const latestBlogPosts = sortedPublishedDateArray.slice(0, 3);
const oldBlogPosts = sortedPublishedDateArray.slice(3, sortedPublishedDateArray.length);

	return (
		<Container>
			<Jumbotron id="blogJumbotron" fluid>
				<h1> The Chronicles of Cheese </h1>
			</Jumbotron>
		<Row>
			<BlogEntryPreviews id="blogPreviewCards" blogData={blogData} newData={latestBlogPosts} />
			
			<OlderBlogs oldData={oldBlogPosts} />
		</Row>			
	</Container>
	);
};

export default BlogLandingPage;
