import React from "react";
import Swal from "sweetalert2";

const SearchBar = ({ setnumberLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let value = e.target.inputLocation.value.trim();
    let valueverification = Number(value) && value >= 1 && value <= 126;
    if (!valueverification) {
      Swal.fire({
        title: "BUEEEEERP",
        text: "You must provide an ID beteewn 1 and 126",
        imageUrl: "../img/burp.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    }

    if (valueverification) {
      Swal.fire({
        position: "center",
        imageUrl: "../img/portal.gif",
        title: "Loading Location Info",
        showConfirmButton: false,
        timer: 2000,
        background: "#171715",
      });
      setnumberLocation(e.target.inputLocation.value);
      e.target.inputLocation.value = "";
    }
  };

  return (
    <div className="searchbox">
    <form onSubmit={handleSubmit} action="">
      <input type="text" name="" id="inputLocation" />
      <button>Search</button>
    </form>
    </div>
  );
};

export default SearchBar;
