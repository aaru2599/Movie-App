import { Tab, Tabs, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import axios from "axios";
import SingleComponent from "../SingleComponent/SingleComponent";
import CustomPagination from "../Pagination/CustomPagination";


const Search = () => {
    const [type, setType] = useState(0)
    const [page, setPage] = useState(1)
    const [searchText, setSearchText] = useState("")
    const [content, setContent] = useState()
    const [numOfPages, setNumOfPages] = useState()

    const fetchSearch = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=c36a1611cce9c2fff6390d5de1cdad2f&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }
    useEffect(() => {
        window.scroll(0, 0),
            fetchSearch()
    }, [type, page])
    return (
        <div className="trendings">
            <h3 className="text-center">{`Movies`.toUpperCase()}</h3>
            <div className="container-fluid  d-flex flex-wrap  justify-content-between">
            </div>
            <div className="d-flex gap-2 ">

                <TextField 
                    fullWidth label="Search"
                    textColor="light"
                    style={{ color: "white" }}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button variant="outlined" style={{ color: "white" }}  onClick={fetchSearch}>
                    Search
                </Button>
            </div>
            <Tabs
                value={type}
                indicatorColor="primary"
                textColor="light"
                onChange={(event, newValue) => {
                    setType(newValue)
                    setPage(1)
                }}
            >


                <Tab label="Search Movie" style={{ width: "50%" }} className="bg-dark me-2" />
                <Tab label="Search Tv" style={{ width: "50%" }} className="bg-dark" />
            </Tabs>

            <div className="container-fluid  d-flex flex-wrap  justify-content-between">
                {


                    content && content.map((items) => (
                        <SingleComponent key={items.id}
                            title={items.title || items.name}
                            id={items.id}
                            media_type={type ? "tv" : "movie"}
                            poster_path={items.poster_path}
                            release_date={items.release_date}
                            name={items.name}
                            vote_average={items.vote_average} />
                    ))

                }
                {
                    searchText&& !content&&(type?<h2 >No Series Found</h2>:<h2>No Movie found</h2>)
                }
            </div>
            {
                numOfPages > 1 &&
                <CustomPagination setPage={setPage} numOfPage={numOfPages} />
            }
        </div>
    )
}
export default Search