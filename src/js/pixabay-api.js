import axios from "axios";


export async function getImagesByQuery(query, page) {
  return await axios.get("https://pixabay.com/api/", {
    params: {
      key: "54671046-ae95888271e1d1b9b249768ad",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: "true",
      page: page,
      per_page: "15"
	}
  })
    .then(response => {
      return response.data; 
    })
}
