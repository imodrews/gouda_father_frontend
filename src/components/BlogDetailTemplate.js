import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

const BlogDetailTemplate = ({ blogData }) => {

	return (
		<Container>
			<Row>
				<Col>Logo</Col>
				<Col>Nav Bar </Col>
				<Col>SearchBar </Col>

				
				{blogData &&
					blogData.map((blogTemplate, index) => (
						<Row blogTemplate={blogTemplate} key={index}>
						
						</Row>
							)		)}
			</Row>
		</Container>
	);
};

export default BlogDetailTemplate;
