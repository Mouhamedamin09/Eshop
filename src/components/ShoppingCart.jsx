import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './ShoppingCart.css';
import arrow from '../assets/ArrowRight.png'
import casque from '../assets/1.jpg'

const ShoppingCart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Wired Over-Ear Gaming Headphones with USB', price: 250, quantity: 3 },
    { id: 2, name: 'Wired Over-Ear Gaming Headphones with USB', price: 70, quantity: 1 },
    { id: 3, name: 'Wired Over-Ear Gaming Headphones with USB', price: 250, quantity: 3 },
    { id: 4, name: 'Wired Over-Ear Gaming Headphones with USB', price: 250, quantity: 3 },
    { id: 5, name: 'Wired Over-Ear Gaming Headphones with USB', price: 250, quantity: 3 },
    { id: 6, name: 'Wired Over-Ear Gaming Headphones with USB', price: 150, quantity: 2 },
    { id: 7, name: 'Wired Over-Ear Gaming Headphones with USB', price: 200, quantity: 1 },
  ]);

  const [showMore, setShowMore] = useState(false);

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 24;
  const total = subtotal - discount;

  const visibleItems = showMore ? items : items.slice(0, 5);

  return (
    <div className="shopping-cart">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        <table className="cart-item-table">
          <thead>
            <tr>
              <th>PRODUCTS</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUB-TOTAL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            
            {visibleItems.map(item => (
              <tr key={item.id}>
                <td className="item-product">
                  <img src={casque} alt={item.name} />
                  <p>{item.name}</p>
                </td>
                <td className="item-price">
                  <p>${item.price}</p>
                </td>
                <td className="item-quantity">
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>
                </td>
                <td className="item-subtotal">
                  <p>${item.price * item.quantity}</p>
                </td>
                <td className="remove-item">
                  <button onClick={() => handleRemove(item.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length > 5 && !showMore && (
          <div className="show-more">
             <button onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show less' : 'Show more'}
            </button>
          </div>
        )}
        {showMore && (
          <div className="scroll-view">
            <table className="cart-item-table">
              <tbody>
                {items.slice(5).map(item => (
                  <tr key={item.id}>
                    <td className="item-product">
                      <img src={casque} alt={item.name} />
                      <p>{item.name}</p>
                    </td>
                    <td className="item-price">
                      <p>${item.price}</p>
                    </td>
                    <td className="item-quantity">
                      <div className="quantity-control">
                        <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 1}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                      </div>
                    </td>
                    <td className="item-subtotal">
                      <p>${item.price * item.quantity}</p>
                    </td>
                    <td className="remove-item">
                      <button onClick={() => handleRemove(item.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <hr className='hr-b' />
        <button className="return-shop">RETURN TO SHOP</button>
      </div>
      <div>
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="totals">
            <p><span className='graytext'>Sub-total:</span> <span>${subtotal}</span></p>
            <p><span className='graytext'>Shipping:</span> <span>Free</span></p>
            <p><span className='graytext'>Discount:</span> <span>${discount}</span></p>
            <hr className="red-border"></hr>
            <p>Total: <span>${total}</span></p>
          </div>
          <div className="checkOutBtn">
            <button className="checkout">PROCEED TO CHECKOUT</button>
            <img src={arrow} width={20} height={20} alt="Arrow" />
          </div>
        </div>
        <div className="ruspina-points">
          <input type="email" placeholder="Email address" />
          <button className="apply-coupon">APPLY COUPON</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
