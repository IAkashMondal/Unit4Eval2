
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
const Pagination = ({page,setPage,checked,setChecked,totalpage,limit,setLimit}) => {


  return (
    <div  >
    <ButtonGroup>
      <Button  data-cy="pagination-first-button" 
       disabled={page <=1}
       onClick={()=>{
           setPage(1);
           setChecked(!checked)
       }}
      >First</Button>

      <Button data-cy="pagination-previous-button" 
       disabled={page <=1}
       onClick={()=>{
         if(page > 1){
           setPage(page - 1);
         }
       }}>Prev</Button>

      <Select data-cy="pagination-limit-select"  onChange={(e) => setLimit(Number(e.target.value))}>
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6" value={6}>6</option>
        <option data-cy="pagination-limit-9" value={9}>9</option>
      </Select>

      <Button data-cy="pagination-next-button" 
      disabled={totalpage < (page) * limit}
           onClick={()=>{setPage(page + 1) 
           }}>Next</Button>

      <Button data-cy="pagination-last-button"
       disabled={page <=1}
       onClick={()=>{
        setPage(Math.ceil(totalpage/limit)
  )}}>Last</Button>
    </ButtonGroup>
    
    </div>
  );
  
};

export {Pagination} ;
