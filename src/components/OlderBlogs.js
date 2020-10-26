import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/BlogLandingPage.css";


const OlderBlogs = ({ oldData, history  }) => {




    return (
        <Card id="oldBlogCard">
        {oldData &&
					oldData.map((oldBlog, index) => (
            <Link  to={`/blog/${oldBlog.fields.slug}`}>             
				<Button id="oldblogbutton" variant="white"  history={history}> {oldBlog.fields.title} </Button>
            </Link>	   
                ))}		
        </Card>
    )
}

export default OlderBlogs;




