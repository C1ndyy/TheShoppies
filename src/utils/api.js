const BASE_URL = "http://www.omdbapi.com/?apikey=a6e00c90";

export async function findMovies(input, pageNo) {
  try {
    let response = await fetch(
      `${BASE_URL}&s=${input}&type=movie&page=${pageNo}`
    ).then((res) => res.json());
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
