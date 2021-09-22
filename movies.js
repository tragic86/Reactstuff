const getMoviesBySearchTerm = async (search) =>{
    const response = await fetch("http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}");
    const data = await response.json();
    console.log(data);
}


const getMovieDetailsbyid = async (id) =>{
    const response = await fetch("http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}");
    const data = await response.json();
    console.log(data);
}