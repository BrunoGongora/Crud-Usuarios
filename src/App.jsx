import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import Card_User from './componentes/Card_User'
import UserForm from './componentes/UserForm'

function App() {
  
  const [data, setData] = useState()
  const [updateInfo, setUpdateInfo] = useState()

 
  
  const getData = data => {
    const url = "https://users-crud1.herokuapp.com/users/"
    axios.get(url)
    .then(response => setData(response.data))
    .catch(error => console.log(error))

  }

  useEffect(() => {
    getData(data)
  }, [])

  return (
    <div className="App">
      <UserForm 
      getData={getData}
      updateInfo={updateInfo}
      setUpdateInfo={setUpdateInfo}/>

      {
        data?.map(datas => (
          <Card_User 
          key={datas.id}
          datas={datas} 
          getData={getData} 
          setUpdateInfo={setUpdateInfo}
          /> 
        ))
      }

      
    </div>
  )
}

export default App
