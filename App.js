//how will we create nested tools in react


const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"i am an h1 tag"),React.createElement("h2",{},"i am an h1 tag")]

    )
);

const heading = React.createElement("h1",{id:"heading"},"Hello world from React") ; 

//JSX
//createElement creates a react element which is a javascript object 
//  in react takes 3 arguments,  1st what tag we need to create 2. object 3.what we have to put in that tag the missingg objecy is the place whw=ere we give attributes to a classs
// now we need to create root 

//   console.log(heading) this outputs object
const root = ReactDOM.createRoot(document.getElementById("root"));
      
root.render(parent);

// rendering converts react code in html

