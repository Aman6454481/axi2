import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axi() {

    const [Userdata,setdata] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums") 
        .then((response)=>{
            setdata(response.data)
        })
    },[])

  return (
    <div className='my-apps' style={{ 
          backgroundColor: 'yellow',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
       }}>
        {Userdata.map((data)=>{
          return(
            <div>
            {data.title} 
            </div>
           )
        })}
    </div>
  )
}
export default Axi
