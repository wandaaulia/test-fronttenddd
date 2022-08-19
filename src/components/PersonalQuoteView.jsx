import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMyQuote } from "../features/quoteSlice";

export default function PersonalQuoteView() {
  const [inputQ, setInputQ] = useState("");

  const myQuotes = useSelector((state) => state.quote.myQuote);

  let checkYours;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    checkYours = myQuotes.indexOf(inputQ);

    if (checkYours < 0) {
      dispatch(setMyQuote(inputQ));
      setInputQ("");
    }
  };

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form id="form" onSubmit={handleSubmit}>
        <input value={inputQ} onChange={(e) => setInputQ(e.target.value)} />
        <button type={`submit`}>Submit</button>
        <ol>
          {myQuotes.map((item, index) => (
            <li style={{ listStyleType: "none" }} key={index}>
              {item}
            </li>
          ))}
        </ol>
      </form>
    </section>
  );
}
