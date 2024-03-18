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


const create = async(userId) =>{

  try {
    const res = await axios.post(`${API_URL}/create`, userId)
    return res.data
  } 
    
  catch (error) {
    
    res.send(error)
     
  } 
}

const getById = async(id)=>{
  try {
    const res = await axios.get(`${API_URL}/getById/id/${id}`)
    //localhost:3001/post/getById/id/65f491ee54febfaa4961cb27
    return res.data
  } 
  catch (error) {
    
  }
}

const getPostByName = async(postTitle) =>{
  try {
      const res = await axios.get(`${API_URL}/title/${postTitle}`)
      return res.data
  } catch (error) {
    console.log(error)
  }
}

const postService = {
    getAll, 
    getById,
    getPostByName,
    create

}
export default postService