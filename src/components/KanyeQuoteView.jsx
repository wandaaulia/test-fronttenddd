import React, { useState, useEffect } from "react";
import axios from "axios";
import { setFav } from "../features/quoteSlice";
import { useDispatch, useSelector } from "react-redux";

export default function KanyeQuoteView() {
  const [qoute, setQoute] = useState("");

  const dispatch = useDispatch();
  const fav = useSelector((state) => state.quote.favQuote);

  const getQoute = async () => {
    try {
      const response = await axios.get("https://api.kanye.rest");
      setQoute(response.data.quote);
    } catch (err) {
      throw new Error(err);
    }
  };

  let checkFav;

  const saveFav = (q) => {
    checkFav = fav.indexOf(q);

    if (checkFav < 0) {
      dispatch(setFav(q));
    }
  };

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      <h3> {qoute} </h3>
      <button onClick={getQoute}>Get Quote</button>
      <button onClick={() => saveFav(qoute)}>Add Favorite</button>
      <ol style={{ marginTop: "10px", textAlign: "center"}}>
        {fav.map((item, index) => (
          <li style={{listStyleType: "none"}} key={index}> {item} </li>
        ))}{" "}
      </ol>
    </section>
  );
}
