import axios from "axios";


export function getImagesByQuery(query) {
  return axios.get("https://pixabay.com/api/", {
    params: {
      key: "54671046-ae95888271e1d1b9b249768ad",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: "true",
      per_page: "9"
	}
  })
    .then(response => {
      return response.data.hits; 
    })
}
