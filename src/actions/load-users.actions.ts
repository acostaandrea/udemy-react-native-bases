import axios from "axios"
import { ReqResUserListResponse } from "../interfaces/reqres.response"

export const loadUsersAction = async(page:number)=>{
    try {
        const {data} = await axios.get<ReqResUserListResponse>(`https://reqres.in/api/users`,
        {
            params:{
                page:page
            }
        })        
        return data.data       
    } catch (error) {
        console.log(error)
        return []
        
    }
}