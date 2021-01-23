import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

function Login (){
    const [payload, setPaylaod] = useState({})

    const [logando, setLogando] = useState(false)

    async function doLogin(){
        setLogando(true)
        /*const response = await api.post('/user/authenticate', payload).data
        
        if(response !== null && typeof response !== Number){
            //guardar o token e redirecionar
        }else{
            setLogando(false)
        }*/
        console.log(payload)
    }

    return(
        <>
        <input type="email" disabled={logando} onChange={e => setPaylaod({...payload, user: e.target.value}) } placeholder="usuário ou email" />
        <input type="password" disabled={logando} onChange={e => setPaylaod({...payload, password: e.target.value}) } placeholder="senha" />
        <input type="button" disabled={logando} onClick={()=> doLogin()} value="Login"/>
        <Link to='/cadastro'>
            <input type="button" onClick={()=> {}} value="Cadastrar"/>
        </Link>
        </>
        )
}

export default Login