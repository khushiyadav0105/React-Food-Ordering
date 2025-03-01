#Namaste react



there are 2 types of components in react
# functional components 
this si the new format of components.

# class based components




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
    //here callback function is writtten
},[this is the dependency array]);

if no dependency array useEffect will be called everytime a comoponent rerenders.
if [] this si the dependency array then useEffect is called only oj the initial render and not again and again when the page reloads
if dependecy array is [btnnameReact] then useEffect will be called everytime btnnameReact will be updated.

by default use effect is called at each render



3. useState
never create state variables inside the component not outside react keeps a strict eye on hooks; 
try to use this on the top;
never create useState inside if else;
dont create it inside for loops and functions too


fetch 
this fetches data from api



{/* if path=/ then body component should be present there
      if path is /about then about component should be there in place of body
      if path is /contcat then conatct should be there in place of body  */}



there are two types of routing in web apps 
1.client side routing -- single page applications and this is done by react in which we just refresh the page the components change instead of reloding a complete different page.
2.server side routing -- html for each page

dynamic routing 


