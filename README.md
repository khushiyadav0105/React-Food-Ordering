#Namaste react








# Export/Import
Two types of export/import

-Default export/import
export default component
import component from "path";


-named export/import
export const component;
import {component} from "path";


# React Hooks
( Normal JS utility Functions )

2 imp;
1. useState(); gives superpower to react  
. /80% of the time this will be used
. import {useState} from 'react';
. to create state variable
. to maintain the state of a component
. when called it gives a state variable which is     recieved by an array.



2. useEffect();  //20% time 
.. first the body is rendered and then use effect is called 
.. imported just like named imports
.. 2 arguments will be passed 
.. callback function and the dependency array 
.. fist when we run the code the body is rendered and the callback     function is stored and as soon as body rendering ends our callback function is executed.
.. this is used when we want our body to be rendered first and then make the api call
.. useEffect(()=>{
    //here callback funcrion is writtten
},[this is the dependency array]);



fetch 
this fetches data from api


https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6069264&lng=73.8750865&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING