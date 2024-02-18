//import { useCallback, useState, useEffect } from "react";
//import axios from "axios";
import AjouterProduit from "./components/AjouterProduit";
import ListeProduits from "./components/ListeProduits";
const MainComponent = () => {
  
  return (
    <div className="container">
      <AjouterProduit />
      <ListeProduits />
    </div>
  );
};

export default MainComponent;
