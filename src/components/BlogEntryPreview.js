import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import "../css/BlogLandingPage.css";

const BlogEntryPreview = ({ preview, history }) => {
	const {
		slug,
	} = preview;

	return (
		<Accordion defaultActiveKey="0">
			<Card id="blogPreviewCard" text={"light" ? "dark" : "white"}>
				<Accordion.Toggle as={Card.Header} eventKey="1">
					<Card.Title id='blTitle'> {preview.title} </Card.Title>
					<Card.Text> {preview.publishdate} </Card.Text>
				</Accordion.Toggle>
				<Card.Img
					variant="top"
					width="40%"
					height="60%"
					src={preview.blogentryimage}
					alt="Card image cap"
				/>
				<div id='bpButtonContainer'>
				<Link to={`/blog/${slug}`}>
						<Button history={history} variant='dark' id='bpButton'> Read Me! </Button>
				</Link>
				</div>
			</Card>
		</Accordion>
	);
};

export default BlogEntryPreview;
