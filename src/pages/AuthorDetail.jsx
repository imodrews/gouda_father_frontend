import React from "react";

import { Link, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faImage,
	faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

const AuthorDetail = ({ authors }) => {
	let { slug } = useParams();
	return (
		<div>
			<Jumbotron id="authorsJumbotron" fluid>
				<Container>
					<h1>The people behind</h1>
					<p>Cheese is our life</p>
				</Container>
			</Jumbotron>
			{authors.length >= 1 &&
				authors
					.filter((author) => author.fields.slug === slug)
					.map((author) => (
						<Container>
							<div className="authorCard">
								<img
									src={`${author.fields.image.fields.file.url}`}
									alt={`${author.fields.slug}`}
								/>
								<h1>{author.fields.name}</h1>
								<p className="title">{author.fields.title}</p>
								<p>{author.fields.shortBio}</p>

								<a
									href={`https://www.linkedin.com/in/${author.fields.linkedIn}`}
									target="_blank"
								>
									<FontAwesomeIcon
										icon={faImage}
										size="3x"
										id="socialbutton"
									/>
								</a>
								<a
									href={`https://github.com/${author.fields.github}`}
									target="_blank"
								>
									<FontAwesomeIcon
										icon={faExternalLinkAlt}
										size="3x"
										id="socialbutton"
									/>
								</a>
								<a href={`mailto:${author.fields.email}`}>
									<FontAwesomeIcon
										icon={faEnvelope}
										size="3x"
										id="socialbutton"
									/>
								</a>
							</div>
						</Container>
					))}
		</div>
	);
};

export default AuthorDetail;
