import {useState,useEffect} from 'react';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
   
    if (!resInfo || !resInfo.cards || resInfo.cards.length < 3) {
        return <Shimmer/>;
    }

    const restaurantInfo = resInfo.cards[2]?.card?.card?.info;
    if (!restaurantInfo) {
        return <Shimmer />;
    }

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);


    return (
        <div className="Menu">
            <p>Hello</p>
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")}-{costForTwoMessage}</p>
            
            <ul>
                 {itemCards?.map((item) => (
                <li key={item.card.info.id}>
                {item.card.info.name} - {"Rs"} - {(item.card.info.defaultPrice || item.card.info.price) / 100}
                </li>
            )) || []}
</ul>

        </div>
    );
};

export default RestaurantMenu;
