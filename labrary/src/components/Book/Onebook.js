import React  , {useState , useEffect}from 'react'
import axios from "axios";


export default function Onebook() {
    const [book, setBook] = useState([])

    useEffect(async (id) => {
       
          const result = await axios.get(`http://localhost:5000/book/${id}`
          );
          setBook(result.data);
        
      }, [book]);
  return (
    <div>
        <h3>{book.title}</h3>
        <h3>{book.img}</h3>
    </div>
  )
}
