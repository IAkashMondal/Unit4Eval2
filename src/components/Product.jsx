// import { Box, Heading, Stack, Tag, TagLabel } from "@chakra-ui/react";
import React from "react";
import style from "../pagination.module.css"
const Product = ({elem}) => {
console.log(elem)
  return (
  <div className={style.grid}>
      <div data-cy="product" key ={elem.id}>
      <img data-cy="product-image"  style={{width:"100%"}} src="https://picsum.photos/seed/picsum2/421/261" alt=""/>
      <div>
      <div className={style.names}>
      <h5 data-cy="product-category" >{elem.category}</h5>
      <h4 data-cy="product-gender" >{elem.gender}</h4>
      </div>
      </div>
      <h2 data-cy="product-title">{elem.title}</h2>
      <h3 data-cy="product-price">Rs{elem.price}/unit</h3>
    </div>
  </div>
  );
};

export default Product;
