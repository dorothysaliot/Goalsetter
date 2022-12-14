import axios from 'axios'


//api url to users
const API_URL = '/api/users/'

//register function
const register = async(userData) =>{
    const response = await axios.post(API_URL,userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login function
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }




//logout function
const logout = () => {
    localStorage.removeItem('user')
  }

const authService = {
    register,
    logout,
    login
}

export default authService;