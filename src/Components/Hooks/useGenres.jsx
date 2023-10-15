const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) return "";
    const GeneresId=selectedGenres.map((g)=>g.id)
    return GeneresId.reduce((acc,curr)=>acc+","+curr)

}
export default useGenres