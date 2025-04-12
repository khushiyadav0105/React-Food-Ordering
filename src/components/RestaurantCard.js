import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
  } = resData?.info;

  return (
    <div className="hover:shadow-2xl rounded-2xl overflow-hidden w-64 flex flex-col h-full transform hover:scale-105 transition-transform duration-300 ">
  {/* Image Section */}
  <img
    className="w-full h-40 md:h-48 object-cover rounded-2xl transition-opacity duration-300 hover:opacity-90"
    alt={name}
    src={CDN_URL + cloudinaryImageId}
  />
  <div className="p-4 flex flex-col flex-grow">
    {/* Restaurant Name & Rating*/}
    <div className="flex items-center justify-between mt-3">
        <h3 className="text-lg font-bold leading-snug truncate whitespace-nowrap overflow-hidden max-w-[80%]">
          {name}
        </h3>
        <span
          className={`ml-2 flex-shrink-0 px-2 py-1 rounded-md text-xs font-bold shadow-sm ${
            avgRating >= 4 ? "bg-green-800" : "bg-yellow-900"
          } text-white`}
        >
          {avgRating} ★
        </span>
    </div>

    

    {/* Cuisines */}
    <p className="text-sm text-black truncate tracking-wide">
      {cuisines.join(", ")}
    </p>

    {/* Cost */} {/* Delivery Time */}
    <div className="flex justify-between items-center">
    <span className="text-sm text-[#454343] font-medium">
        {costForTwo}
    </span>

    <p className="text-xs text-[#2f1216] mt-2 font-medium">
      ⏱️ {sla?.slaString}
    </p>
      
    </div>


  </div>
</div>

  );
};

export default RestaurantCard;
