import React,{ useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { api } from '../services/api'

function Cadastro(){

    
    const [cadastrando, setCadastrando] = useState(false)
    const [payload, setPayload] = useState({})
    
    async function doCadastro(event){
        event.preventDefault() //impede o botão de submit de recarregar a pagina

        setCadastrando(true)
        console.log(payload)

        if(payload.password !== payload.confirmation){
            alert('senhas divergem')
            setCadastrando(false)
            return
        }

        try{
            const response = await api.post('/user/signup', payload)
        
        if(response.status === 201){
            //guardar o token e redirecionar
            localStorage.setItem('token', response.data)
            toast("Cadastrado com sucesso!", {
                delay: 500,
                autoClose: 5000,
                onClose: () => window.location.assign('/')
            })
        }else{
            toast("Não foi possivel realizar seu cadastro", {
                delay: 500,
                autoClose: 5000,
                onClose: () => setPayload({})
            })
        }
            setCadastrando(false)
        }catch(e){
            console.log(e)
            setCadastrando(false)
            localStorage.clear()
        }
        
    }

    useEffect(() =>{ setPayload({})}, [])

    return(
        <form>
        <input type='text' onChange={e => {setPayload({...payload, first_name: e.target.value})}} disabled={cadastrando} maxLength={12} required placeholder='Primeiro nome'/>
        <input type='text' onChange={e => {setPayload({...payload, last_name: e.target.value})}} disabled={cadastrando} maxLength={12} required placeholder='Último nome'/>
        <input type='text' onChange={e => {setPayload({...payload, alias: e.target.value})}}disabled={cadastrando} maxLength={80} placeholder='Apelido'/>
        <input type='email' onChange={e => {setPayload({...payload, email: e.target.value})}}disabled={cadastrando} maxLength={254} placeholder='Email'/>
        <input type='password' onChange={e => {setPayload({...payload, password: e.target.value})}} disabled={cadastrando} maxLength={60} placeholder='Senha'/>
        <input type='password' onChange={e => {setPayload({...payload,confirmation: e.target.value})}}disabled={cadastrando} maxLength={60} placeholder='Confirmar senha'/>
        <input type='submit' disabled={cadastrando} onClick={e => doCadastro(e)} value='Cadastrar' />
        </form>
    )

}

export default Cadastro