import axios from "axios";

const API_URL = "http://localhost:3001/user";

const register = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    return res.data;
  } catch (error) {
    res.send(error);
  }
};

const login = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);
  
    if (res) {
      //  localStorage.setItem("email", JSON.stringify(res.data.email));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }

    return res.data;
  } catch (error) {
    res.send(error);
  }
};

const logout = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(
      `${API_URL}/logout`,
      {},
      { header: { authorization: token } }
    );
    if (res.data) {
      localStorage.clear();
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
