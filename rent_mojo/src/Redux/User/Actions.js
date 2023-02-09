import {login,logout} from './ActionTypes'
import { useNavigate } from "react-router-dom"
import axios from 'axios'



let handleSignin = (e,form,setButtonLoading) =>(dispatch) =>{
    e.preventDefault()
    axios.post('https://tender-lime-pike.cyclic.app/user/login',{
    ...form
}).then((res)=>{
    console.log(res.data)
    if(res.data=="Password is wrong"){
        alert('Password is Wrong')
    }else{
        dispatch({type:login,payload:true})
        let token = res.data.token
        localStorage.setItem('token',JSON.stringify(token))
    }
    setButtonLoading(false)
}).catch((err)=>{
    alert('User not found')
    setButtonLoading(false)
    console.log(err)
})
}


export  {handleSignin}