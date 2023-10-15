import axios from "axios"
import { useEffect, useState } from "react"
import SingleComponent from "../SingleComponent/SingleComponent"
import CustomPagination from "../Pagination/CustomPagination"
import Genres from "../Genres/Genres"
import useGenres from "../Hooks/useGenres"

const Movies=()=>{
const [page,setPage]=useState(1)
const [content,setContent]=useState([])
const [numOfPages,setNumOfPages]=useState()
const [selectedGenres,setSelectedGenres]=useState([])
const [genres,setGenres]=useState([])
const genreForURL=useGenres(selectedGenres)
    const fetchMovies=async()=>{
        const {data}=await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=c36a1611cce9c2fff6390d5de1cdad2f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
        )
setContent(data.results)
console.log(data);
setNumOfPages(data.total_pages)
// console.log(data.total_pages);

    }
    useEffect(()=>{
        fetchMovies()
    },[page,genreForURL])

    return(
        <div className="trendings">
            <h3 className="text-center">{`Movies`.toUpperCase()}</h3>
            <Genres
            type="movie"
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
            />
            <div className="container-fluid  d-flex flex-wrap  justify-content-between">
            {
                

                content && content.map((items) =>
                    <SingleComponent key={items.id}
                        title={items.title}
                        id={items.id}
                        media_type="movies"
                        poster_path={items.poster_path}
                        release_date={items.release_date}
                        name={items.name}
                        vote_average={items.vote_average} />)

            }
        </div>
        {
            numOfPages>1&&
            <CustomPagination setPage={setPage} numOfPage={numOfPages}/>
        }

        </div>
    
    )
}
export default Movies


// Promises
// Web Worker
// arvind.google.com
// play,.google.com
// Options & HEAD