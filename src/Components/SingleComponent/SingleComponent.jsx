import { Unarchive } from "@mui/icons-material"
import CustomPagination from "../Pagination/CustomPagination"
import { unavailable } from "../config/Config"
import { useState } from "react"
import Loader from "../ShimmerEffect/Loader"
import ShimmerEffect from "../ShimmerEffect/ShimmerEffect"


const SingleComponent = ({
    id,
    title,
    media_type,
    poster_path,
    release_date,
    name,
    vote_average,
}) => {
    const [isLoading,setIsLoading]=useState(false)
    return (
        <div >
            {
                isLoading?<Loader/>:(
                    <div className="card-group ">
                <div className="card card-back mb-2 bg-dark position-relative text-light  " data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: "250px" }}>
                    <div className={`badge position-absolute ${vote_average > 6 ? "bg-primary" : "bg-danger"}`} >{vote_average}</div>
                    <img key={id} className="card-img-top " height={400} src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : unavailable} />
                    <div className="card-title fs-4 text-center text-capitalize text-nowrap overflow-hidden" style={{textOverflow: "ellipsis"}}>
                        {title || name}
                    </div>
                    <div class="card-footer">
                        <div className="d-flex justify-content-between">
                            <p className="text-capitalize">{(media_type) === "tv" ? "tv Series" : "movies"}</p>
                            <p className="text-capitalize">{release_date} </p>
                        </div>
                    </div>
                </div>
            </div >
                )
            }
        </div >
    )
}
export default SingleComponent