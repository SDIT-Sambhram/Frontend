import { StoreContext } from '../../Contexts/StoreContext';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectedItemSection.css'

const SelectedItemSection = ({ items }) => {

  const { selectEvent } = useContext(StoreContext)

  const totalAmount = items.length * 100;
  let couponDiscount = 0;  
  let currentCoupon = null;

  couponDiscount = items.length === 4 ? 150
    : items.length === 3 ? 80 
      : items.length === 2 ? 40
        : 0;

  currentCoupon = items.length === 4 ? "DRAGON"
    : items.length === 3 ? "FLAME"
      : items.length === 2 ? "FANG"
        : "EMBER";


  const grandTotal = totalAmount - couponDiscount;



  const navigate = useNavigate();

  const handleAddMore = () => {
    navigate('/events');
  };
 
  return (
    <div className="items-section">
      {/* <div className="item-section-head"><h1>Selected Events</h1></div> */}

      
        <h4>SELECTED EVENTS</h4>
      <div className="item-rows">
        {items.map((item) => (
          <div className="item-row" key={item._id}>
            <div className="items">
              <span className="name">{item.eventName}</span>
              <span className="price">₹ 100</span>
            </div>
            <div className="cancel">
              <i className="fa-solid fa-xmark" onClick={() => selectEvent(item._id)} style={{ color: '#a30000' }}></i>
            </div>
          </div>
        ))
        }
      </div>



      <div className="addMore" onClick={handleAddMore}>
        + Add more
      </div>

      <div className="receipt-section">
        <div className="current-ticket-section">

          {
            <img src={
              currentCoupon === "DRAGON" ? "dragon_thumb.png" : currentCoupon === "FLAME" ? "flame_thumb.png" : currentCoupon === "FANG" ? "fang_thumb.png" : "ember_thumb.png"
            } alt="" />
          }

        </div>

        <div className="total">
          <div className='price'>Total: <p>₹ {totalAmount}</p></div>
          {<div className='price'>{currentCoupon} Pass discount :  <p>{couponDiscount}</p></div>}
          <div className="grand-total price">Grand Total: <p>₹{grandTotal}</p></div>
        </div>
      </div>

    </div>
  )
}

export default SelectedItemSection;