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
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-64 flex flex-col h-full transition duration-300 hover:scale-105">
      <img
        className="w-full h-40 md:h-48 object-cover object-center"
        alt={name}
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
        <div className="flex justify-between items-center mt-2">
          <span
            className={`px-2 py-1 rounded-md text-white text-xs font-semibold ${
              avgRating >= 4 ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {avgRating} ⭐
          </span>
          <span className="text-sm text-gray-700">{costForTwo}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{sla?.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
