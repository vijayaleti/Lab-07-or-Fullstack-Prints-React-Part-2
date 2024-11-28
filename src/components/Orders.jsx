import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../config';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Define the fetchOrders function to retrieve orders from the API
  const fetchOrders = () => {
    fetch(`${BASE_URL}/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
  };

  // Use the useEffect hook to fetch orders when the component mounts
  useEffect(() => {
    fetchOrders();
  }, []); 

  return (
    <div className="center mw7 ba mv4">
      <div className="bg-white pa3 mb3">
        <h2 className="f2 mb2">Orders</h2>
        <table className="w-100">
          <thead>
            <tr>
              <th className="tl pv2">Order ID</th>
              <th className="tl pv2">Buyer Email</th>
              <th className="tl pv2">Products</th>
              <th className="tl pv2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.map((order) => (
              <tr key={order._id}>
                <td className="tl pv2">{order._id}</td>
                <td className="tl pv2">{order.buyerEmail}</td>
                <td className="tl pv2">{order.products.join(', ')}</td>
                <td className="tl pv2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
