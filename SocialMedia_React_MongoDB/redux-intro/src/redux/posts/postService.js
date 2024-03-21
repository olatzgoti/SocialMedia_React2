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


const create = async(postData) =>{

  try {
    const token = JSON.parse(localStorage.getItem('token'))
    const res = await axios.post(`${API_URL}/create`, postData, {
    headers: {
      authorization: token,
    },
  })
    return res.data
  } 
    
  catch (error) {
    res.send(error)
  } 
}

const updatePost = async(postData) => {
  try {
 //   console.log(postData)
    const token = JSON.parse(localStorage.getItem('token'))
    const { id } = postData
    const res = await axios.put(`${API_URL}/update/id/${id}`, postData, {
      headers: {
        authorization: token,

      },
    })  
    return res.data
  } 
  catch (error) {
    res.send(error)
  }
}

const deletePost = async(id) => {
try {
  const token = JSON.parse(localStorage.getItem('token'))
  const res = await axios.delete(`${API_URL}/delete/id/${id}`, { headers: { authorization: token, },})
  return res.data
// RES IS NOT DEFINED??
} catch (error) {
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

const likePost = async() => {
  try {
    const like = await axios.put(`${API_URL}/like/id/${id}`)
    return res
  }  
  catch (error) {
    console.log(error)
  }
}

const postService = {
    getAll, 
    getById,
    getPostByName,
    create,
    updatePost,
    deletePost,
    likePost
}
export default postService