import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import "../Components/Shop.css";
import axios from "../Components/axios";
const Shop = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [filter, setFilter] = useState("All");


  const filterItem = (CategItems) => {
    const updatesItems = myData.filter((curElem) => {
      return curElem.Category === CategItems;
    });
    setItems(updatesItems);
  } 

   console.log(filter)
  // using Async Await
  const getMyPostData = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setMyData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(myData);
  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <h1 className="shop_heading">Products</h1>
      <div className="cat_card">
      <div className="left_side_bar">
      <h1 className="cat_heading">CATEGORIES</h1>
       <ul className="lists">
        <li className={filter==="All"?"cat__active":"cat"} onClick={() => setFilter("All")}>All</li>
        <hr className="hr"/>
        <li className= {filter==="Men's cloth's"?"cat__active":"cat"} onClick={() => setFilter("Men's cloth's")}>Men's cloth's</li>
        <hr className="hr"/>
        <li className={filter==="women's clothing"?"cat__active":"cat"} onClick={() => setFilter("women's clothing")}>Women's cloth's</li>
        <hr className="hr"/>
        <li className={filter==="electronics"?"cat__active":"cat"} onClick={() => setFilter("electronics")}>Electonics</li>
        <hr className="hr"/>  
        <li className={filter==="jewelery"?"cat__active":"cat"} onClick={() => setFilter("jewelery")}>Jewelery</li>
        <hr className="hr"/>
      </ul>
    </div>
        <div className="Shop_card_container">
          {myData?.map((curValue, index) => {
            return (
              
              <div className="Shop_card">
                <div className="Card_image">
                  <img  className="Card_image" src={curValue.image} alt={curValue.title}/>
                </div>
                <div className="Card_title">{curValue.title}
                </div>
                <div className="Card_description">
                </div>
                <div className="price_rating">
                <div className="Card_price">Price {curValue.price}
                </div>
                <div className="Card_rating"> Rating {curValue.rating.rate}
                </div>
                </div>
              </div>
             
            );
          })}
        </div>
        </div>
    </>
  );
};

export default Shop;
