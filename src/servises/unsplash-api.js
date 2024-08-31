import axios from "axios";


export const fetchPhotos = async (topic, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=F_ZlTxZXItMqdyPkbSBeCFXGZFvz6W7v-KobzwM2plM&query=${topic}&page=${page}&per_page=16`
  );
  return response.data.results;
}

// const API_KEY = "F_ZlTxZXItMqdyPkbSBeCFXGZFvz6W7v-KobzwM2plM"
// const BASE_URL = "https://api.unsplash.com";

// export const fetchPhotos = async (topic, page) => {
//      // const response = await axios.get(
//      //   `http://hn.algolia.com/api/v1/search?query=${topic}&page=${page}&hitsPerPage=5`
//      // );
   
//      const response = await axios.get(`${BASE_URL}?key=${API_KEY}&query=${topic}&page=${page}&per_page=${20}`);
   
//      return {
//        photos: response.data.hits,
//        totalPages: response.data.nbPages,
//      };
//    };

