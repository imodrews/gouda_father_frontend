import React, {useState} from 'react';
import Form from "react-bootstrap/Form";





const AddRecipe = () => {
    const [ userQuery, setUserQuery ] = useState("");
    const [ input, setInput ] = useState({
        title: '',
        slug: '',
        shortDescription: '',
        quickFacts: '',
        ingredients: '',
        description: '',
        author: '',
        imageURL: '',
        tags: '',
    })

const handleClick = (e) => {
    setUserQuery(input)

}

const handleChange = (e) => {
    setInput({value: e.target.value})
}

    return(
     <div>
        
        <Form action="" method="post">

            <Form.Group controlId="makingRecipe">



            <Form.Control name="title" type="text" placeholder="Title" required="required" onChange={handleChange}> </Form.Control>
            <Form.Control name="slug" type="text" placeholder="Slug" required="required" onChange={handleChange}> </Form.Control>
            <Form.Control name="short description" type="text" placeholder="Short description" required="required" onChange={handleChange}> </Form.Control> 
            <Form.Control name="quick facts" type="text" placeholder="Quick facts" required="required" onChange={handleChange}> </Form.Control> 
            <Form.Control name="ingredients" type="text" placeholder="Ingredients" required="required" onChange={handleChange}> </Form.Control> 
            <Form.Control name="description" type="text" placeholder="Description" required="required" onChange={handleChange}> </Form.Control>
            <Form.Control name="author" type="text" placeholder="Author" required="required" onChange={handleChange}> </Form.Control>
            <Form.Control name="imageurl" type="text" placeholder="Image URL" required="required" onChange={handleChange}> </Form.Control> 
            <Form.Control name="tags" type="text" placeholder="Tags" required="required" onChnage={handleChange}> </Form.Control>
            <button type="submit" onClick={handleClick}>Submit</button>

            </Form.Group>

         </Form>


        </div>
    )
}

export default AddRecipe;
