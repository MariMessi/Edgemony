const API_KEY = "c496d0c10e7b75d980cbf13a1f2406a0";
const BASE_URL = "https://api.themoviedb.org/3/";

const GET = async (type = "tv", resource = "") => { 
    const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
    const data = await res.json();
    return data;
};


export { GET };
