import {useState,useEffect} from 'react';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

    const [resInfo,setresInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu()
    },[resId]);

    console.log("Fetching from:", MENU_API + resId);


    const fetchMenu = async ()=>
    {
        const data=await fetch (MENU_API + resId)
        const json=await data.json();
        setresInfo(json.data);
    };

    
    if (!resInfo || !resInfo.cards || resInfo.cards.length < 3) {
        return <Shimmer/>;
    }


    // // ✅ Extract safely inside the return statement
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
            <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
            
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
