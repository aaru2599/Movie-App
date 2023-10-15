import axios from "axios"
import { useEffect } from "react"
import Chip from '@mui/material/Chip';

const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage,
}) => {

    const handleAdd = (genre) => {
        console.log("handleClick");
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter((item) => item.id !== genre.id))
        setPage(1)
    }
    const handleRemove=(genre)=>{
        setSelectedGenres(
            selectedGenres.filter((selected)=>selected.id!==genre.id)
        )
        setGenres([...genres,genre])
        setPage(1)
    }
    
    const fetchGenres = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=c36a1611cce9c2fff6390d5de1cdad2f&language=en-US`)
            setGenres(data.genres)
        } catch (err) {
            console.log(err);
        }
    }
    console.log(genres);
    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({})
        }

    }, [])
    return (
        <div className="text-align-center p-4">
            {selectedGenres && selectedGenres.map((genre) => (
                <Chip label={genre.name}
                 color="primary"
                  key={genre.id}
                   className="bg-primary m-1"
                    clickable 
                    onClick={()=>handleRemove(genre)}
                    />

            ))
            }
            {genres && genres.map((genre) => (
                <Chip label={genre.name}
                    key={genre.id}
                    className="bg-light m-1"
                    clickable
                    onClick={() => handleAdd(genre)} />

            ))
            }
        </div>
    )
}
export default Genres