import React from "react";
import "./SearchPage.css";
import Button from "@material-ui/core/Button";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 august to 30 august - 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://images.unsplash.com/photo-1559599189-fe84dea4eb79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        location="privste room in the centre of London"
        title="Stay at this spacious Edwardian house"
        description=" 1 guest - 1 bed - 1.5 shared bathrooms - wifi - kitchen"
        star={4.7}
        price="£30 / night"
        total="£117 total"
      />
    </div>
  );
}

export default SearchPage;
