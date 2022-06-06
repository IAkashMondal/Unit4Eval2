import React from "react";

const AddProduct = ({data,setData,checked,setchecked}) => {
  // TODO: Remove below const and instead import them from chakra

  let [HideForm,setHideForm]=React.useState(false)
  let [formdata,setFormdata]=React.useState({imageSrc:"https://picsum.photos/seed/picsum2/421/261",title:"",category:"",gender:"",price:""})
  let productsHandle=({data,setData,checked,setchecked})=>{
    setHideForm(!HideForm)
  }
  let productsHandleChange=(e)=>{
      setFormdata({...formdata,
        [e.target.name]:e.target.value
      })}
  let handlesubmit=(e)=>{
    e.preventDefault()
    if(formdata.imageSrc !== ""
      && formdata.gender !== "" 
      && formdata.category !== "" 
      && formdata.price !== "" 
      &&formdata.title !== "")
    {
      
      fetch(`http://localhost:8080/products`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formdata)}).then((r)=>(r.json())).then((r)=>{
          setData([...data,r])
          setchecked(!checked)
        })
    }
    else{
      alert("empty")
    }
    setHideForm(!HideForm)
  
  }

  return (
    
    <>
<button onClick={productsHandle} data-cy="add-product-button">Add new product</button>
      { HideForm ? <div>
              <form onSubmit={handlesubmit}>
        
        <input onChange={productsHandleChange} name="title" value={formdata.title} placeholder="Add product title" data-cy="add-product-title" />
        <select onChange={productsHandleChange} name="category"  data-cy="add-product-category">
          <option>Select Category</option>
          <option value="Shirt" data-cy="add-product-category-shirt">Shirts</option>
          <option value="Pant" data-cy="add-product-category-pant">Pants</option>
          <option value="jeans" data-cy="add-product-category-jeans">Jeans</option>
        </select>
        <div  data-cy="add-product-gender">Gender
          <label> Male<input onChange={productsHandleChange} name="gender" value={"Male"} type="radio" data-cy="add-product-gender-male"></input></label>
          <label>Female<input onChange={productsHandleChange} name="gender" value={"Female"} type="radio" data-cy="add-product-gender-female"></input></label>
          <label>Unisex<input onChange={productsHandleChange} name="gender" value={"Unisex"} type="radio" data-cy="add-product-gender-unisex"></input></label>
        </div>
        <label>Product price<input onChange={productsHandleChange} value={formdata.price} name="price" placeholder="Add Price" data-cy="add-product-price" /></label>
        <button  data-cy="add-product-submit-button">Submit</button>
      
    </form>
      </div>: <></>
      }
    </>
  );
};

export default AddProduct;
