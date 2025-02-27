import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from 'react';
import Shimmer from "./Shimmer";


const Body = () => {

  const [listOfRestaurants,setlistOfRestaurants]=useState([]);
  
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6069264&lng=73.8750865&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );

    const json = await data.json();
    console.log(json);
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  if(listOfRestaurants.length===0){
    return <h1><Shimmer/></h1>
  }

    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick= {() => { const filteredList = listOfRestaurants.filter((res) =>
          res.info.avgRating>4
          );
          setlistOfRestaurants(filteredList);
          }
        }>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
            listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))
          }
          
        </div>
      </div>
    );
  };

export default Body;