import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique Activities"
          description="Spaces that are more than just a place"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__480.jpg"
          title="Entire Home"
          description="Comfortable private places, with room for friends and family"
        />
      </div>
      <div className="home__section">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
