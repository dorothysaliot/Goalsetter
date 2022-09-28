import axios from 'axios'

const API_URL = '/api/goals/'

//create new goal function
const createGoal = async(goalData,token) =>{
    const config = {
        header:{
            Authorization: `Bearer {$token}`
        }
    }
    const response = await axios.post(API_URL,goalData,token)

    return response.data
}

const goalService = {
    createGoal
}

export default goalService;