import React,{useState,useEffect} from "react";
import axios from "axios"
import Products from "./components/Products"
const App = () => {
  let [data,setData]=React.useState([])
  let [checked,setChecked]=React.useState(false)
  let [page,setPage]=React.useState(1)
  let [limit,setLimit]=React.useState(3)
  let [totalpage,setTotalpage]=useState(0)
  useEffect(()=>{
    axios.get(` http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((resp)=>{
      setData(resp.data)
      setTotalpage(Number(resp.headers["x-total-count"]))
      console.log(totalpage)
    })
  },[page,limit,checked])
  return <div>
    
    <Products totalpage={totalpage}page={page} setPage={setPage} limit={limit} setLimit={ setLimit}checked={checked} setChecked={setChecked} data={data} setData={setData}/>
  
    {/* TODO: Code here */}
    </div>;
};

export default App;
