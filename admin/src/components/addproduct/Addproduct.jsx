import React from 'react'
import './addproduct.css'
 import upload_area from '../../assets/upload_area.svg'
const Addproduct = () => {
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>ProductTitle</p>
        <input type="text" name="name" placeholder='add product' />
      </div>
      <div className="add-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input type="text" name="old_price" placeholder='old price' />
          </div>
          <div className="addproduct-itemfield">
            <p>OfferPrice</p>
            <input type="text" name="new_price" placeholder='new price' />
          </div>
      </div>
      <div className="addprodduct-itemfiled">
        <p>Product Category</p>
        <select name ="category" className='add-product-select'>
              <option value="women">Women</option>
               <option value="men">Men</option>
                <option value="kid">Kid</option>
          </select>

      </div>
      <div className="addproduct-itemfield">
        <label htmlFor='file-input'>
          <img src={upload_area}  className='thumbnail-img' alt='upload img'/>
        </label>
        <input type="file" name='image' id='file-input' hidden />
      </div>
      <button className='addproduct-btn'>Add</button>
    </div>
  )
}

export default Addproduct
