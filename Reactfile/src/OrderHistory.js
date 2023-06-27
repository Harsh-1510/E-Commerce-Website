import React from "react";
import './OrderHistory.css'
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  return (
    <>
      <div className="history-wrapper">
        <span className="heading">Order History</span>
        <span className="all-order">All Order</span>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Payment</th>
              <th>Type</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Product A</td>
              <td>Credit Card</td>
              <td>Physical</td>
              <td>Delivered</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Product B</td>
              <td>PayPal</td>
              <td>Digital</td>
              <td>Processing</td>
              <td>$25</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Product C</td>
              <td>Debit Card</td>
              <td>Physical</td>
              <td>Shipped</td>
              <td>$40</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Product D</td>
              <td>Credit Card</td>
              <td>Digital</td>
              <td>Delivered</td>
              <td>$15</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Product E</td>
              <td>PayPal</td>
              <td>Physical</td>
              <td>Cancelled</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Product F</td>
              <td>Debit Card</td>
              <td>Physical</td>
              <td>Delivered</td>
              <td>$35</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Product G</td>
              <td>Credit Card</td>
              <td>Physical</td>
              <td>Shipped</td>
              <td>$45</td>
            </tr>
          </tbody>
        </table>
        <h4>Need Help? <Link to='/contact'><span>Contact Us</span></Link> </h4>
      </div>
    </>
  );
};

export default OrderHistory;
