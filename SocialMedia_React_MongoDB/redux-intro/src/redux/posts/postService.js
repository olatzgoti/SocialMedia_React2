import axios from "axios";

const API_URL = "http://localhost:3001/posts";

const getAll = async () => {
  try {
    const res = await axios.get(`${API_URL}/posts`);
    return res.data.posts;
  }
  catch (error) {
    res.send(error);
  }
};

const getById = async(id)=>{
  try {
    const res = await axios.get(`${API_URL}/post`+ id)
    return res.data
  } catch (error) {
    
  }

}

const postService = {
    getAll, 
    getById

}
export default postService