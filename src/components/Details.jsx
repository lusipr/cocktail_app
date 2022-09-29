import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "antd";
import { Navbar, Footers, DetailContent } from "../utils";

const Details = () => {
  const [drink, setDrink] = useState([]);
  const { id } = useParams();

  const loadDrinksList = async () => {
    try {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      
      setDrink(res.data.drinks[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDrinksList();
  }, []);

  return (
    <div>
      <Layout>
        <Navbar loadDrinksList={loadDrinksList} />

        <DetailContent data={drink} />

        <Footers />
      </Layout>
    </div>
  );
};

export default Details;
