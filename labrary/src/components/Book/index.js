import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Books.css"
import { Link } from "react-router-dom";


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
    <div className="booksMain">
      {Books.map((elm) => {
        return (
          <div className="mainDiv">
          <Link  to={`/book/${elm._id}`}>
            <img className="bookImg" src={elm.img} alt="" />
            </Link>
            <span >{elm.title}</span>
            <span>{elm.pages}</span>
            <span>{elm.price}</span>
          </div>
        );
      })}
    </div>
  );
}
