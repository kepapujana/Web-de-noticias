import React, { useState } from 'react'

const Form = () => {
    const name = document.getElementById('nombre')
    const email = document.getElementById('correo')
    const userInfo = document.getElementById('content')


    const [data, setData] = 
    useState({
        name: '',
        email: '',
    })

    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    //ESTADO INICIAL, CASILLAS
    const initialState = {
        name: '',
        email: '',
    }
       
    const clearState = () => {
    setData({ ...initialState })
    }
       
    //AL EJECUTAR SUBMIT BTN
    const handleSubmit = (event) => {
        event.preventDefault()
        clearState()
        console.log(`sending data… ${data.name} ${data.email}`)

        saveDataStorage()
        const userFromStorage = JSON.parse(localStorage.getItem('userName'))
        userInfo.innerHTML = `<p>Hola ${userFromStorage.name} tu mail es ${userFromStorage.email}</p>`
        console.log(userFromStorage);
    } 

    //LOCAL STORAGE
    function saveDataStorage() {
        localStorage.setItem('userName', JSON.stringify({
            name: name.value,
            email: email.value,
        }))
    }

    //CAMBIOS EN EL INPUT
    const handleInputChange = (event) => {
        console.log('nombre input', event.target.name)
        console.log('valor input', event.target.value)

        if (data.name.length + 1 < 3) {
            setMessage('Name must be at least 3 characters')
            setBtnDisabled(true)
          } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }
       
    
    return (
        <>
            <h2>Form</h2>
            <div id="content"></div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={data.name}
                    onChange={handleInputChange}
                    name="name"
                    id="nombre"
                />
                <input
                    type="email"
                    placeholder="email"
                    value={data.email}
                    onChange={handleInputChange}
                    name="email"
                    id="correo"
                />
                <button type="submit" disabled={btnDisabled}>Enviar</button>
                <p>{message}</p>
            </form>
        </>
    )
}

export default Form