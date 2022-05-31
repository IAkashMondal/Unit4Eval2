import React from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import {Pagination} from "./Pagination";


const Products = ({data,setData,checked,setChecked,page,setPage,limit,setLimit,totalpage}) => {
  // TODO: Remove below const and instead import them from chakra


  return (
    <>
   <AddProduct  checked={checked} setChecked={setChecked} data={data} setData={setData}/>
   <div >{
       data.map((elem)=>(
         <div >
             <Product elem={elem}/>
         </div>
         
       ))
       }
  </div>
     {/* Pagination */}
     <Pagination totalpage={totalpage} checked={checked} setChecked={setChecked} page={page} setPage={setPage} limit={limit} setLimit={ setLimit}/>
  </>
     
 
  );
};

export default Products;
