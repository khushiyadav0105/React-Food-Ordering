import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants,setlistOfRestaurants]=useState([]);

  const [filteredRestaurants,setfilteredRestaurants]=useState([]);

  const [searchText,setsearchText]=useState("");
  
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const response = await fetch( SWIGGY_API);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("Fetched Data:", json);
  
      setlistOfRestaurants(
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
  
      setfilteredRestaurants(
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    

  };

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false){
    return (
      <h1>You are offline!! please check your internet connection </h1>
    )
  }
  
  
    return listOfRestaurants.length===0 ? (<Shimmer/>):( 
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
              setsearchText(e.target.value);
            }}/>
            <button className="search-button" 
              onClick={()=> {console.log(searchText);
                const filtered=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredRestaurants(filtered);

            }}>Search</button>
          </div>


          <button 
          className="filter-btn" onClick= {() => { const filteredList = listOfRestaurants.filter((res) =>
          res.info.avgRating>4.5);
          setfilteredRestaurants(filteredList);
          }
        }>Top Rated Restaurant</button>


        </div>
        <div className="res-container">
        

          {
            filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id}
             to={"/restaurants/"+restaurant.info.id}>
              <RestaurantCard resData={restaurant}/></Link>
          ))
          }
          
        </div>
      </div>
    );
  };

export default Body;