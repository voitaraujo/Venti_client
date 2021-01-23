import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import In from './in'
import Out from './out'

function Main(){
    return(
        <>
            <ToastContainer />
            <Out />    
        </>    
    )
}

export default Main