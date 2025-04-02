import React from "react";
import { appContext } from "../App";
import { useContext } from "react";
export default function Orders() {
  const { orders, cart } = useContext(appContext);
  return (
    <div>
      <h3>My Orders</h3>

      <ol>
        {orders.map((value) => (
          <li>
            {value.orderDate}-{Object.keys(value.items).length}-{value.status}-
            {value.total}
          </li>
        ))}
      </ol>
      <hr></hr>
    </div>
  );
}