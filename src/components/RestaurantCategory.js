import React from 'react';
import ItemList from './ItemList';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';



const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    setShowIndex(index === showItems ? null : index); // Toggle visibility based on index
  };

  return (
    <div className="w-9/12 mx-auto my-6">
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <div
          className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors duration-300"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          {/* Toggle icon using Heroicons */}
          {showItems ? (
            <ChevronUpIcon className="h-6 w-6 text-[#eebbc3]" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-[#eebbc3]" />
          )}
        </div>

        {/* Display items with smooth transition */}
        {showItems && (
          <div className="mt-4">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
