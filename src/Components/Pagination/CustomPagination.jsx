
import { Pagination } from "@mui/material"

const CustomPagination = ({setPage,numOfPage=10}) => {
const handlePageChange=(page)=>{
setPage(page);
window.scroll(0,0)
}
    return (
        <div style={{marginBottom:"60px"}} > 
        
        <Pagination className="pagination d-flex justify-content-center bg-secondary rounded-circle p-2" 
        
        count={numOfPage}
        onChange={(e)=>{handlePageChange(e.target.textContent)}}/>
        </div>
    )
}
export default CustomPagination