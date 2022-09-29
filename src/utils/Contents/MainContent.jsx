import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Input } from "antd";
const { Meta } = Card;
const { Search } = Input;

const MainContents = (props) => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");

  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="flex justify-between items-center mt-6">
          <h1 className="font-semibold text-2xl">{props.title ? props.title : "All Drinks"}</h1>
          <Search
            onChange={(e) => setSearchData(e.target.value)}
            placeholder="Search Drinks"
            style={{ width: 400 }}
          />
        </div>

        <div className="grid gap-6 grid-cols-4 mt-6">
          {props.drinks !== undefined ? (
            props.drinks
              .filter(
                (value) => value.strDrink.toLowerCase().indexOf(searchData) > -1
              )
              .map((drink) => {
                return (
                  <div key={drink.idDrink}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src={drink.strDrinkThumb}
                          onClick={() => navigate(`/drink/${drink.idDrink}`)}
                        />
                      }
                    >
                      <Meta
                        title={drink.strDrink}
                        description={drink.strCategory}
                      />
                    </Card>
                  </div>
                );
              })
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export { MainContents };
