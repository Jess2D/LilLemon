import React from "react";
import restaurant from "../assets/images/restaurant.png";

const Home = () => {
  return (
    <>
      {" "}
      <section id="home" className="about">
        <div className="text">
          <h1>Litle Lemon</h1>
          <h2>New Zealand</h2>
          <p>
            Delight in our exclusive dining experience where each dish tells a
            story of flavors and passion. Reserve your table today and embark on
            a culinary journey that awaits.
          </p>
          <button> Reserve a Table</button>
        </div>
        <div className="restaurant-img">
          <img src={restaurant} className="restaurant" alt="Logo"></img>
        </div>
      </section>
    </>
  );
};

export default Home;
