import { memo, useEffect, useState } from "react"
// import "./App.css"

const Trending = () => {
    const [results, setResults] = useState([])
    const [page,setPage]=useState(1)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=c36a1611cce9c2fff6390d5de1cdad2f&page=${page}`)
            .then((responce => responce.json()))
            .then((data) => setResults(data.results))
            .catch((error) => console.error('Error fetching data:', error));
    }, [])
    return (
        <>
        
        <div className="container-fluid d-flex flex-wrap mt-2 justify-content-around">

            {
                results.map((result) =>
                (
                    <div className="card-group ">
                        <div className="card card-back mb-2 bg-dark text-light  " data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: "250px" }}>

                            <img key={result.id} className="card-img-top " src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} />

                            <div className="card-title fs-4 text-center text-capitalize">
                                {result.title || result.name}
                            </div>
                            <div class="card-footer">
                               
                                <div className="d-flex justify-content-between">
                                    <p className="text-capitalize">{(result.media_type)==="tv"?"tv Series":"movies"}</p>
                                    <p className="text-capitalize">{result.release_date} </p>
                                </div>
                            
                            </div>
                        </div>

                    </div >

                   
                )

                )
            }
            <div className="card-header"></div>

        </div >
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Trending