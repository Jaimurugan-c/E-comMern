
import React, { useState } from 'react';
import './addproduct.css';
import upload_area from '../../assets/upload_area.svg';

const Addproduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: '',
    image: '',
    category: 'women',
    new_price: '',
    old_price: ''
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    // You can add image upload logic here
    console.log(productDetails);
       let responseData ;
       let product = productDetails;
       let formData = new FormData();
       formData.append('product',image)
      await fetch('http://localhost:4000/upload',{
        method:'POST',
        headers:{
          Accept: "application/json",
          
        },
        body:formData
      }).then((res)=>res.json().then((data)=>{responseData=data}))
      if(responseData.success){
        product.image= responseData.image_url;
        console.log(product);
        await fetch('http://localhost:4000/addproduct',{
          method:"Post",
          headers:{
            Accept: 'application/json',
             'Content-Type': 'application/json',
          },
          body:JSON.stringify(product),
        }).then((res)=>res.json()).then((data)=>{
          data.success?alert("product Added"):alert("failed")
        })
      }
  };

  return (
    <div className='add-product'>
      <h1>Add Product</h1>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Add product title"
        />
      </div>

      <div className="add-price">
        <div className="addproduct-itemfield">
          <p>Old Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Old price"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="New price"
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-select"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="thumbnail-img"
            alt="upload"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button onClick={Add_Product} className="addproduct-btn">
        Add
      </button>
    </div>
  );
};

export default Addproduct;
