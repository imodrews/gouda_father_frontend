import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import "../css/BlogLandingPage.css";

const BlogEntryPreview = ({ preview, history }) => {
	const {
		title,
		blogShortDescription,
		publishDate,
		blogEntryImage,
		author,
		slug,
	} = preview;

	return (
		<Accordion defaultActiveKey="0">
			<Card id="blogPreviewCard" text={"light" ? "dark" : "white"}>
				<Accordion.Toggle as={Card.Header} eventKey="1">
					<Card.Title> {preview.title} </Card.Title>
					<Card.Text> {preview.publishDate} </Card.Text>
				</Accordion.Toggle>
				<Card.Img
					variant="top"
					width="10rem"
					height="14%"
					src={preview.blogEntryImage}
					alt="Card image cap"
				/>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						<Card.Text> {preview.author} </Card.Text>
						<Card.Text> {preview.blogShortDescription} </Card.Text>
						<Link to={`/blog/${slug}`}>
							<Button history={history}> Read Me! </Button>
						</Link>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default BlogEntryPreview;
