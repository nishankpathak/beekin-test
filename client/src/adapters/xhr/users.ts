import axios from '../axios'

export const login = async(user : {email : string, password : string}) =>  {
  return await axios.post('login', user)
}

export const currentUser = async (token : string) => {
  return await axios.get('whoAmI')
}