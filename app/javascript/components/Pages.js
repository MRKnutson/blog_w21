// this component is responsible for rendering a list of Pages
// but lets start simple for now.

// import react
import React from "react";

// ÷A react component is just a function that returns JSX (html embed in js)
const Pages = (props) => {
  console.log("Here!");
  console.log(props.pages);
  // we want to take this array of objects and convert it to an array of jsx
  // ideas of a method to use here
  const renderPages = ()=> {
    console.log("RenderPages called");
    return props.pages.map((page) => {
      return (
      <div>
        <h1>{page.title}</h1>
        <h3>{page.author}</h3>
        <p>{page.body}</p>
      </div>
        );
    });
  };

  return <div>
    <a href ="/pages/new">new page </a>
    <p>Pages Here: {renderPages()}</p>;
  </div>
};

// export component
export default Pages;

