import React from "react";
import "./ShippingTo.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ShippingTo() {
  return (
    <div className="shippingTo">
      <LocationOnIcon className="shippingTo__locationIcon" />

      <div className="shippingTo__nav">
        <div className="shippingTo__option">
          <span className="shippingTo__optionOne">Deliver to</span>
          <span className="shippingTo__optionTwo">Laos</span>
        </div>

        <div className="shippingTo__option__one">
          <span className="shippingTo__option__one__two">Today's Deals</span>
          <span className="shippingTo__option__one__two">Customer Service</span>
          <span className="shippingTo__option__one__two">Gift Cards</span>
          <span className="shippingTo__option__one__two">Registry</span>
          <span className="shippingTo__option__one__two">Sell</span>
        </div>
      </div>
    </div>
  );
}

export default ShippingTo;
