import {useState,useEffect} from 'react';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex]=useState(null)
   
    if (!resInfo || !resInfo.cards || resInfo.cards.length < 3) {
        return <Shimmer/>;
    }
    const restaurantInfo = resInfo.cards[2]?.card?.card?.info;
    if (!restaurantInfo) {
        return <Shimmer />;
    }
 
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);
           


    return (
        <div className="text-center">
            <h1 className='font-bold my-6 text-2xl' >{name}</h1>
            <p className='font-bolsd text-lg'>{cuisines?.join(", ")}-{costForTwoMessage}</p>
            
            <ul>
                 {itemCards?.map((item) => (
                <li key={item.card.info.id}>
                {item.card.info.name} - {"Rs"} - {(item.card.info.defaultPrice || item.card.info.price) / 100}
                </li>
            )) || []}
            </ul>

            {categories.map((category,index)=>(
                <RestaurantCategory 
                key={category?.card?.card?.title} 
                data={category?.card?.card}
                showItems={index=== showIndex ? true:false}
                setShowIndex={()=>setShowIndex(index)}
                />
            ))}

        </div>
    );
};

export default RestaurantMenu;
