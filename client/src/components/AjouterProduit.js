import React, { Fragment, useState } from "react";
import axios from "axios"

const AjouterProduit = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    const body = { description };
    console.log("lemiiiiiiiiiiiiis")
    const response = await axios.post("/api/todos", {
      description
    });
    window.location = "/";
    console.log("nnnnnnnnnnnnnnn")
  };
 
 
  return (
    <Fragment>
      <h1 className="text-center mt-5">Liste des Courses</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-dark btn-md">Ajouter</button>
      </form>
    </Fragment>
  );
};

export default AjouterProduit;
