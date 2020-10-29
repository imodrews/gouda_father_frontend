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
		.filter((newBlog) => newBlog.slug === slug)
		.map((newBlog) => (
			<Row>
				<Col>
					<Row>
						<img width="100%" height="410rem" src={newBlog.heroimageurl} alt="cheese and grapes"/>
					</Row>
					<Row>
						<h1> {newBlog.title} </h1>
					</Row> 
					
					<Row>
						<p> {newBlog.author} </p>
					</Row>
					<Row>
						<p> {newBlog.publishdate} </p>
						<div>{newBlog.blogcontentrich}</div>
						<img width="45%" src={newBlog.blogentryimage} alt="cheese board"/> 
					</Row>
					<Row>
						<p>Tags</p>
					</Row>
				</Col>
			</Row>
		))}
		
		</Container>

	
	)
}

export default BlogDetail;

