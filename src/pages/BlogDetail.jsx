import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "../css/BlogLandingPage.css";

const BlogDetail = ({ blogData }) => {
	const { slug } = useParams();



	return (

		<Container id="detailBody">
			{blogData.length >= 1 &&
							blogData
		.filter((newBlog) => newBlog.fields.slug === slug)
		.map((newBlog) => (
			<Row>
				<Col>
					<Row>
						<img width="100%" height="410rem" src={newBlog.fields.heroImage.fields.file.url} alt="cheese and grapes"/>
					</Row>
					<Row>
						<h1> {newBlog.fields.title} </h1>
					</Row> 
					
					<Row>
						<p> {newBlog.fields.author.fields.name} </p>
					</Row>
					<Row>
						<p> {newBlog.fields.publishDate} </p>
						<div>{documentToReactComponents(newBlog.fields.blogContentRich)}</div>
						<img width="45%" src={newBlog.fields.blogEntryImage.fields.file.url} alt="cheese board"/> 
					</Row>
					<Row>
						<p>{newBlog.fields.tags}</p>
					</Row>
				</Col>
			</Row>
		))}
		
		</Container>

	
	)
}

export default BlogDetail;

