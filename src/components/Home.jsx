import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "antd";
import { Navbar, MainContents, Footers } from "../utils";

const Home = () => {
  const [drinks, setDrinks] = useState(undefined);
  const { id } = useParams();

  const loadDrinksList = async () => {
    try {
      let res;
      if(id === undefined) {
        res = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
      }
      else {
        res = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${id}`
        );
      }

      setDrinks(res.data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDrinksList();
  }, []);

  return (
    <Layout>
      {/** Navbar / Header  */}
      <Navbar loadDrinksList={loadDrinksList} />

      <MainContents title={id} drinks={drinks} />

      <Footers />
    </Layout>
  );
};

export default Home;
