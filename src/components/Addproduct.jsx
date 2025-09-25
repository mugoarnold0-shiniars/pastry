import React, { useState } from 'react'
import "./stylings/Button.css"; // import the new button styles
import axios from 'axios';
import Loader from './Loader'; // import the loader


const Addproduct = () => {
    const [product_name,setProduct_name] = useState("")
    const [product_description,setProduct_description] = useState("")
    const [product_cost,setProduct_cost] = useState("")
    const [product_photo,setProduct_photo] = useState("")

    const[loading,setLoading]=useState(false)
    const[success,setSuccess] =useState("")
    const[error,setError] =useState("")


    const submit= async (e)=>{
      e.preventDefault()
      setLoading(true)
    
    try {
      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_description", product_description);
      data.append("product_cost", product_cost);
      data.append("product_photo",product_photo)
      
  
      const response =  await axios.post("https://arnold254.pythonanywhere.com/api/addproduct",data );
      setSuccess("Added product is successfully ✅");
      setLoading(false)
      
    }
    catch (error){
    setLoading(false)
    setError("Errror entering the product")
    }
    }



  return (
    <div className='row justify-content-center mt-4'>
 
      
        <div className="col-md-6 card shadow p-4 ">
          <h1 className='text-center'>Add product</h1>

          {/* Loader */}
          {loading && <Loader />}

{/* Messages */}
{success && <p className="text-success">{success}</p>}
{error && <p className="text-danger">{error}</p>}
       
        <form onSubmit={submit}>
            <input type="text" 
            className='form-control'
            placeholder="Enter your products name"
            value={product_name}
            onChange={(e)=>setProduct_name(e.target.value)}
            /> <br />

           <input type="text" 
            className='form-control p-4'
            placeholder="Enter your products details"
            value={product_description}
            onChange={(e)=>setProduct_description(e.target.value)}
            /> <br />

            <input type="number" 
            className='form-control'
            placeholder="Enter your products cost"
            value={product_cost}
            onChange={(e)=>setProduct_cost(e.target.value)}
            /> <br />

            <label >Product Photo</label>
            <input type="file" 
            className='form-control'
            placeholder="Enter your products name"
            accept='image/*'
            onChange={(e)=>setProduct_photo(e.target.files[0])}
            required
            /> <br />
            
           
       <button type='submit' className='btn btn-primary' >Add Product</button>


        </form>

        
        </div>
    </div>
  )
}

export default Addproduct
