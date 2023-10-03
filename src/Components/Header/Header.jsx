import '../Header/Header.css'
const Header=()=>{
    return(

        <div className="header" onClick={()=>{window.scroll(0,0)}}>
            <div className=" bg-dark text-light p-3 d-flex justify-content-center fs-3 gap-4">
                <span className="bi bi-film"></span>
                <span>MOVIEE HUB 🎥</span>
            </div>
        </div>
    )

}
export default Header