import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const json = await response.json();
      const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setlistOfRestaurants(restaurants);
      setfilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="text-[#9fa1e1] text-center mt-10 text-2xl font-semibold">
        You are offline!! Please check your internet connection
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="	bg-[#dedee1] min-h-screen px-6 py-4">
      <div className="filter flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="search flex flex-col sm:flex-row gap-3 w-full md:w-auto ml-24 ">
          <input
            type="text"
            className="p-2 rounded-md border bg-[#f3f3f4] hover:shadow-lg "
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-[#001858] text-[#e8e8ed] font-semibold rounded-md shadow hover:bg-[#233565f6]"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-8 py-2 mr-24 bg-[#001858] text-[#ffffff] font-semibold rounded-md shadow hover:bg-[#233565f6]"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-10 max-w-[1600px] ">
          {filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Body;
