import axios from "axios"
import { useEffect, useState } from "react"
import SingleComponent from "../SingleComponent/SingleComponent"
import CustomPagination from "../Pagination/CustomPagination"

const Series = () => {
    const [content, setContent] = useState([])
    const [page, setPage] = useState(1)
    const [numOfPage,setNumOfPage]=useState()

    const fetchSeries = async () => {
        const { data } = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=c36a1611cce9c2fff6390d5de1cdad2f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        setContent(data.results)
        setNumOfPage(data.total_pages)
        // console.log(data.total_pages);
        // console.log(content);
    }
    useEffect(()=>{
        fetchSeries()
    },[page])
    return (
        <div className="trendings">

            <h4 className="text-center">{`discover series`.toUpperCase()}</h4>
            <div className="container-fluid  d-flex flex-wrap  justify-content-between">
            {
                

                content && content.map((items) =>
                    <SingleComponent key={items.id}
                        title={items.title}
                        id={items.id}
                        media_type="tv"
                        poster_path={items.poster_path}
                        release_date={items.release_date}
                        name={items.name}
                        vote_average={items.vote_average} />)

            }
        </div>
            <CustomPagination setPage={setPage} numOfPage={numOfPage}/>



        </div>
    )
}
export default Series