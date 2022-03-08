import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Books() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    const get = async () => {
      await axios
        .get(`http://localhost:5000/books`)
        .then((res) => {
          setBooks(res.data);
          //  console.log(res.data);
        })
        .catch((error) => {
          console.log(error, "err");
        });
    };

    get();
  }, []);

  return (
    <div>
      {Books.map((elm) => {
        return (
          <div>
            <h1>{elm.name}</h1>
            <img src={elm.img} alt="" />
          </div>
        );
      })}
    </div>
  );
}
