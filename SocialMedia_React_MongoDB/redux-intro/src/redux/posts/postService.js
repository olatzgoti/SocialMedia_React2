import axios from "axios";

const API_URL = "http://localhost:3001/post";

const getAll = async () => {
  try {
    const res = await axios.get(`${API_URL}/`);
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

const getPostByName = async(postTitle) =>{
  try {
      const res = await axios.get(`${API_URL}/post/title`+ postTitle)
      return res.data
  } catch (error) {
    console.log(error)
  }
}

const postService = {
    getAll, 
    getById,
    getPostByName

}
export default postService