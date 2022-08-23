import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
import { useEffect } from 'react'

const UserForm = ({getData, updateInfo, setUpdateInfo}) => {

    const {register, reset, handleSubmit} = useForm()

    useEffect(() => {
      if (updateInfo) {
        reset(updateInfo)
      }
    }, [updateInfo])
    

    const resetInfo = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
      }


      const createUser = data => {
        const url = "https://users-crud1.herokuapp.com/users/"
        axios.post(url, data)
        .then(response => 
            getData())
        .catch(err => console.log(err))
        reset(resetInfo)
      }

      const updateInformation = data => {
        const url = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
        axios.patch(url, data)
        .then(response => 
            getData())
            .catch(err => console.log(err))
    }

const submit = data => {
    if (updateInfo) {
        updateInformation(data)
        setUpdateInfo()
    }else {
        createUser()
        
    }
    reset(resetInfo)
}




  return (
    <div>
        <h1>{updateInfo ? "Update" : "Create"}</h1>
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="first_name">Name</label>
            <input {...register(`first_name`)}type="text" id="name"/>
            <label htmlFor="last_name">Lastname</label>
            <input {...register(`last_name`)}type="text" id='last_name'/>
            <label htmlFor="email">Email</label>
            <input {...register(`email`)}type="text" />
            <label htmlFor="password">Password</label>
            <input {...register(`password`)}type="text" />
            <label htmlFor="birthday">Birthday</label>
            <input {...register(`birthday`)} type="date" />
            <button>{updateInfo ? "Save User" : "Create User"}</button>
        </form>
    </div>
  )
}

export default UserForm