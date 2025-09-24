import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loader from './Loader'
import axios from 'axios'

const Mpesapayment = () => {
    // we shall use the useLocation{}hook yto retrieve the details(properties)
    const {product} = useLocation().state || {}
    const img_url="https://Arnold254.pythonanywhere.com/static/images/"
    const [phone , setPhone]= useState("")
    const[loading,setLoading]=useState(false)
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    // implement the mpesa payment
    const submit = async (e)=>{
        e.preventDefault()
        setLoading(true)

        const data = new FormData()
        data.append("phone",phone)
        data.append("amount",product.product_cost)
        const response = await axios.post("https://Arnold254.pythonanywhere.com/api/mpesa_payment",data)
         setSuccess(response.data.message)
         setLoading(false)
    }
  return (
    <div className='row justify-content-center mt-3'>
        {loading && <Loader/>}
        {success && <p className="text-success">{success}</p>}
      <h1 className='text-success text-center'>Lipa na M-Pesa</h1>
      {/* {product.product_cost} <br />
      {product.product_description}<br />
      {product.product_id} <br />
      {product.product_name} */}
      <div className="col-md-6 text-center">
      <img src={img_url+product.product_photo} alt="product image" className='card-img product_img mt-3' />
      <h4>Product Name: <span className='text-danger'>{product.product_name}</span></h4>
      <h4>Price of the product: <span className='text-danger'>KES{product.product_cost}</span></h4>
      </div>
      <div className='col-md-6'>
        <div className="card shadow p-4 text-center">
        <form onSubmit={submit}> 
            <label >Fill in to complete the trensaction</label>
            <input type="number"
            className='form-control'
            value={product.product_cost}
            readOnly
            /> <br />
            <input type="number"
            className='form-control'
            value={phone}
            onChange={(e)=>{
                setPhone(e.target.value)
            }}
           placeholder='Enter phone number here. Formatt 2547..'
          
            />
            <button className='btn btn-success'>Complete Payment</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Mpesapayment
