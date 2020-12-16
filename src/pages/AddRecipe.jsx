import React, {useState, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import "../css/RecipeLandingPage.css";


const AddRecipe = () => {


//     const [ input, setInput ] = useState({
//         title: '',
//         slug: '',
//         shortdescription: '',
//         quickfacts: '',
//         ingredients: '',
//         description: '',
//         author: '',
//         imageurl: '',
//         tags: '',
//     });

//     const [ userInfo, setUserInfo ] = useState(null)

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }

// const postOptions = {
//     method: 'POST',
//     body: JSON.stringify({ input }),
//     headers: {'Content-Type': 'application/json'}  
// }
//          fetch('http://localhost:3000/api/recipes', postOptions)
//         .then(response => response.json())
//         .then(data => setUserInfo(data))
//         console.log(input)






    return(
     <>
     <div className="coming_soon_box">
        <h1 className="coming_soon">Coming soon!</h1> 
    </div>
        {/* <Form onSubmit={handleSubmit} >

            
            <Form.Control 
            name="title" 
            type="text" 
            placeholder="Title" 
            required="required" 
            value={input.title || ''} 
            onChange ={e => setInput({...input, title: e.target.value })}
           
            />
            <br />
            <Form.Control 
            name="slug" 
            type="text" 
            placeholder="Slug" 
            required="required" 
            value={input.slug || ''}
            onChange ={e => setInput({...input, slug: e.target.value })}  
          
            />
            <br />
            <Form.Control 
            name="shortdescription"
             type="text" 
             placeholder="Short description" 
             required="required" 
             value={input.shortdescription || ''}   
             onChange ={e => setInput({...input, shortdescription: e.target.value })} 
           
             />  
             <br />
            <Form.Control 
            name="quickfacts" 
            type="text" 
            placeholder="Quick facts" 
            required="required" 
            value={input.quickfacts || ''}  
            onChange ={e => setInput({...input, quickfacts: e.target.value })} 
           
            /> 
            <br />
            <Form.Control 
            name="ingredients" 
            type="text" 
            placeholder="Ingredients" 
            required="required" 
            value={input.ingredients || ''} 
            onChange ={e => setInput({...input, ingredients: e.target.value })} 
           
            /> 
            <br />
            <Form.Control 
            name="description" 
            type="text" 
            placeholder="Description" 
            required="required" 
            value={input.description || ''}
            onChange ={e => setInput({...input, description: e.target.value })}
            
             /> 
             <br />
            <Form.Control
             name="author"
              type="text" 
              placeholder="Author" 
              required="required" 
              value={input.author || ''} 
              onChange ={e => setInput({...input, author: e.target.value })} 
              
              /> 
              <br />
            <Form.Control 
            name="imageurl" 
            type="text" 
            placeholder="Image URL" 
            required="required" 
            value={input.imageurl || ''} 
            onChange ={e => setInput({...input, imageurl: e.target.value })} 
         
            />  
            <br />
            <Form.Control 
            name="tags" 
            type="text" 
            placeholder="Tags" 
            required="required"
            value={input.tags || ''}
            onChange ={e => setInput({...input, tags: e.target.value })} 
             
              />
            <br /> 
            <button type="submit" onClick={handleSubmit}>Submit</button>

          

         </Form> */}


    </>
    )
}

export default AddRecipe;
