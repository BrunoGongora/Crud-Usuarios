import axios from 'axios'
import React from 'react'

const Card_User = ({datas, getData,setUpdateInfo}) => {
    const deleteInformation = id => {
        console.log(datas)
        const url = `https://users-crud1.herokuapp.com/users/${id}/`
        axios.delete(url)
        .then(response => 
            getData() )
        .catch(err => console.log(err.response))
    }


    const editInformation = () => {
      setUpdateInfo(datas)
    }
  return (
    <div>
        <h2>{`${datas.first_name} ${datas.last_name}`}</h2>
        <p>{datas.email}</p>
        <p>{datas.password}</p>
        <p>{datas.birthday}</p>
        <button onClick={()=> deleteInformation(datas.id)}>Delete</button>
        <button onClick={editInformation}>Edit</button>

    </div>
  )
}

export default Card_User