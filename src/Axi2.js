// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function Axi2() {
//   const [mydata,setmydata] = useState([]);
//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/todos") 
//     .then((response)=>{
//         setmydata(response.data)
//     })
//   },[]);

//   return (
//    <>
 
//        {mydata.map((post)=>{
//          const {id,title} = post;
//          return <div className="card" key={id}>
//           <h2>{id}</h2>
//           <p>{title}</p>
//           </div>
//        })}
  
//    </>
//   )
// }

// export default Axi2











import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axi2() {
  const [mydata, setMydata] = useState([]);
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setMydata(response.data);
      });
  }, []);

  return (
    <>
      {mydata.map((post) => {
        const { id, title } = post;
        return (
          <div className="card" key={id}>
            <h2>{id}</h2>
            <p>{title}</p>
          </div>
        );
      })}
    </>
  );
}

export default Axi2;
