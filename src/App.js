import React,{useState,useEffect} from "react";
import axios from "axios"
import Products from "./components/Products"

const App = () => {
  let [data,setData]=React.useState([])
  let [checked,setChecked]=React.useState(false)
  let [page,setPage]=React.useState(1)
  let [totalpage,setTotalpage]=useState(0)
  let [limit,setLimit]=React.useState(3)
  
  useEffect(()=>{
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((r)=>{
      setData(r.data)
      setTotalpage(Number(r.headers["x-total-count"]))
    })
  },[page,limit,checked])
  return <div>
    
    <Products limit={limit} setLimit={ setLimit}  totalpage={totalpage}page={page} setPage={setPage} checked={checked} setChecked={setChecked} data={data} setData={setData}/>
  
    {/* TODO: Code here */}
    </div>;
};

export default App;
