import axios from "axios";
import React, { useState, useEffect } from "react";

const ResidentInfo = ({ url }) => {
  const [resident, setresident] = useState("");
  

  const callApi = () => {
    axios
      .get(url)
      .then((res) => setresident(res.data))
      .catch((err) => console.log(err));
  };

  // useEffect(callApi, []);

  return (
    <article className="residentInfo__card">
      <figure>
        <div><span className={`residentInfo__card--statuscolor ${resident?.status}`}></span>{resident?.status}</div>
        <img src={resident?.image} alt={resident?.name} />
        <figcaption>{resident?.name}</figcaption>
      </figure>
      <section>
        <ul>
          <li>
            <span>Specie: </span>
            {resident?.species}
          </li>
          <li>
            <span>Origin: </span>
            {resident?.origin?.name}
          </li>
          <li>
            <span>Episodes where appear: </span>
            {resident?.episode?.length}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentInfo;
