import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "../css/BlogLandingPage.css";
import image from '../images/goudafather.jpg'

const BlogDetail = ({ blogData }) => {
	const { slug } = useParams();



	return (

		<Container id="detailBody">
			{blogData.length >= 1 &&
							blogData
		.filter((newBlog) => newBlog.slug === slug)
		.map((newBlog) => (
			<Row>
				<Col id='blogPosition'>
					
					<Row>
						<h1 id='blogTitle'> {newBlog.title} </h1>
					</Row> 
					
					<Row>
						<p> By {newBlog.author} </p>
					</Row>
					<Row id='blogContentPosition'>
						<p> {newBlog.publishdate} </p>
						<div id='blogArticle'>{newBlog.blogcontentrich}</div>
						<img width="30%" src={newBlog.blogentryimage} alt="cheese board"/> 
					</Row>
					
				</Col>
			</Row>
		))}
		
		</Container>

	
	)
}

export default BlogDetail;

