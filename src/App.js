import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Main } from "./components/Main/Main";
import "./App.css";
import img1 from "./img/watch_1.png";
import img2 from "./img/watch_3.png";
import img3 from "./img/watch_4.png";
import { Footer } from "./components/Footer/Footer";

const App = (props) => {
  const [items] = useState([
    {id: 1, name: 'Rado', price: 65300, piece: 1, maxPiece: 100, totalPrice: 65300, img: img1, like: false, cart: false},
    {id: 2, name: 'Bvlgari', price: 81700, piece: 1, maxPiece: 100, totalPrice: 81700, img: img2, like: false, cart: false},
    {id: 3, name: 'Rado', price: 72700, piece: 1, maxPiece: 100, totalPrice: 72700, img: img3, like: false, cart: false}
  ]);
  const [orders, setOrders] = useState([]);
  const [follow, setFollow] = useState([]);
  const addToOrder = (item) => {
    let isInArray = false
    orders.forEach(el => {
      if(el.id === item.id){
        isInArray = true
      }
    })
    if(!isInArray){
      setOrders([...orders, item])
    }
  };
  const addToFollow = (item) => {
    let isInArray = false
    follow.forEach(el => {
      if(el.id === item.id){
        isInArray = true
      }
    })
    if(!isInArray){
      setFollow([...follow, item])
    }
  };
  const deleteOrder = (id) => {
    orders.map(el => {
      el.id === id ? el.cart = false : el.cart = true
    })
    setOrders(orders.filter((item) => item.id !== id))
  };
  const deleteFollow = (id) => {
    follow.map(el => {
      el.id === id ? el.like = false : el.like = true
    })
    setFollow(follow.filter((el) => el.id !== id))
  };

  return (
    <>
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <Navbar
          orders={orders}
          onDelete={deleteOrder}
          follow={follow}
          onDeleteFollow={deleteFollow}
          onAdd={addToOrder}
          setOrders={setOrders}
        />
        {/* END NAVBAR */}
        {/* MAIN */}
        <Main items={items} onAdd={addToOrder} onAddFollow={addToFollow} />
        {/* END MAIN */}
        {/* FOOTER */}
        {/* <Footer /> */}
        {/* END FOOTER */}
      </section>
      {/* CONTENT */}
    </>
  );
};

export default App