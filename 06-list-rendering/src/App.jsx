import { useState } from "react"

export default function App() {

  const shopData = ["McDonalds", "Coffee Beans"]

  const eventData = ["Free coupon", "Voucher", "Door gift"]

  const promotions = [
    {
      "name":"Buy 3 free 1",
      "description":"Discount for every 3 purchased"
    },
    {
      "name":"Watson Clearance Sale",
      "description":"Shop closing down sale"
    }
  ]

  const renderShops = () => {
    const shops = [];
    for (let s of shopData) {
      shops.push(<li>{s}</li>)
    }
    return shops;
  }

  return (
    <>
      <h1>Somewhere Street Shopping Mall</h1>
      <ul>
        <li>{renderShops()}</li>
      </ul>
      <h2>Events</h2>
      <ul>
        {
          eventData.map((elm) => {
            return <li>{elm.toUpperCase()}</li>
          })
        }
      </ul>
    </>
  )
}