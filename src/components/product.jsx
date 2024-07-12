
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import './product.css'
import sendDataToGoogleSheets from "./dataSend"
import Description from './Description';
import cart from '../assets/cart1.png'

const Product = ({type}) => {

    const { id } = useParams();

    const product = {
      id: 1, // Assign a value to the id
      name: "2024 Aiesec Ruspina T-Shirt",
      description: "With Global leaders Logo - Space Gray - white and black",
      price: 45,
      discountPrice: 55,
      discount: "20% OFF",
      colors: [
          { id: 1, name: 'Gray', colorCode: '#B0B0B0' },
          { id: 2, name: 'Silver', colorCode: '#D3D3D3' },
          { id: 3, name: 'Black', colorCode: '#000000' },
          { id: 4, name: 'White', colorCode: '#FFFFFF' }
      ],
      sizes: ["S", "M", "L", "XL"],
      images: [
          "/src/assets/t-shirt_f.png", // Main image path
          "/src/assets/T-shirt_b.png", // Additional image paths
          "/src/assets/t-shirt_f.png",
          "/src/assets/T-shirt_b.png",
          "/src/assets/t-shirt_f.png"
      ],
      sku: "A264671",
      availability: "In Stock",
      brand: "Ruspina",
      category: "T-Shirt",
      Description: `Introducing the ultimate AIESEC Bracelet by the Ruspina Local Committee. This elegantly crafted accessory is more than just a bracelet – it’s a symbol of unity, leadership, and global impact. Made with premium materials, this bracelet combines style, durability, and meaning, making it the perfect addition to any AIESEC member’s collection.
      A Connection to the Global Community: Wearing the Ruspina Local Committee’s AIESEC Bracelet connects you to a network of like-minded individuals around the world. It’s a statement of your commitment to global exchange, cultural understanding, and making a positive impact in your community.`
  };
  

      const handleImageClick = (index) => {
        setCurrentImageIndex(index);
      };




  
  const [size, setSize] = useState(product.sizes[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].colorCode);


  const checkoutData = {
    item: 'messi',
    quantity: 1,
    price: 10
  };




  

 
 

    return (
        <div className="App">
          <div className="product-container">
          <div className="product-image-container">
        <div className="product-image">
          <img src={product.images[currentImageIndex]} alt="T-shirt" />
        </div>
        <div className="product-thumbnails">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => handleImageClick(index)}
              className={currentImageIndex === index ? 'active-thumbnail' : ''}
            />
          ))}
        </div>
      </div>
            <div className="product-details">
              <p className="Product-name">
                {product.name} {product.description}
              </p>
              <div className="product-meta">
                <div className='flex'>
                    <span><span className='meta-name'>Sku:</span> {product.sku}</span>
                    <span className='meta-name'>Brand: {product.brand}</span>
                </div>
                <div className='flex'>
                    <span><span className='meta-name'>Availability:</span><span className="availability"> {product.availability}</span></span>
                    <span className='meta-name'>Category: {product.category}</span>
                </div>
                </div>

              <p className="price">45 DT <span className="discount">55 DT</span>{product.discount? <span className="off">20% OFF</span> : null} </p>
              <hr style={{ borderColor: '#E4E7E9', borderWidth: '0.5px' }}/>
              <div className='selectors'>
              <div className="color-selector">
                <p>Color</p>
                <div className="color-options">
                    {product.colors.map((color) => (
                    <div
                        key={color.id}
                        className={`color-circle ${selectedColor === color.colorCode ? 'selected' : ''}`}
                        style={{ backgroundColor: color.colorCode }}
                        onClick={() => setSelectedColor(color.colorCode)}
                    ></div>
                    ))}
                </div>
                </div>
                {type==="Bracelet" ? null :
                  <div className="size-selection">
                  <p>Size</p>
                  <select className='size' value={size} onChange={(e) => setSize(e.target.value)}>
                      {product.sizes.map((sizeOption) => (
                      <option  key={sizeOption} value={sizeOption}>
                          {sizeOption}
                      </option>
              ))}
            </select>
                </div>
                }
              
              </div>
              <button className="add-to-cart" onClick={() =>sendDataToGoogleSheets(checkoutData)}>ADD TO CART     <img src={cart} alt="cart" style={{width:"24px",marginLeft:"5px"}} /></button>
              <button className="buy-now">Buy Now</button>
              <h5 className='garantee'>100% Guarantee Safe Checkout</h5>
            </div>
            
          </div>
          
              <Description description={product.Description} />
        </div>
      );
}




export default Product;