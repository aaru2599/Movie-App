import '../Trending/Trending.css'
import axios from "axios"
import { useEffect, useState } from "react"
import SingleComponent from "../SingleComponent/SingleComponent"
import CustomPagination from '../Pagination/CustomPagination'
const Trendings = () => {
    const [page,setPage]=useState(1)
    const [content, setContent] = useState([])
    const fetchTrending = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/trending/all/day?api_key=c36a1611cce9c2fff6390d5de1cdad2f&page=${page}`
            );
            console.log(response.data);
            setContent(response.data.results);
        } catch (error) {
            console.error("Error fetching trending data:", error);
        }
    }


    useEffect(() => {
        fetchTrending()
    }, [page])
    return (
        <div className='trendings'>
           
            <h4 className='text-center'>{`trendings`.toUpperCase()}</h4>
        <div className="container-fluid  d-flex flex-wrap  justify-content-between">
            {
                

                content && content.map((items) =>
                    <SingleComponent key={items.id}
                        title={items.title}
                        id={items.id}
                        media_type={items.media_type}
                        poster_path={items.poster_path}
                        release_date={items.release_date}
                        name={items.name}
                        vote_average={items.vote_average} />)

            }
        </div>
            <CustomPagination setPage={setPage} />

        </div>
    )
}
export default Trendings