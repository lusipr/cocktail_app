import React from "react";
import { Image } from "antd";

const DetailContent = (props) => {
  const { data } = props;

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="flex container gap-x-6 py-6">
          <div>
            <Image width={400} src={data.strDrinkThumb} />
          </div>

          <div className="flex items-center">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-bl-primary font-bold text-3xl">{data.strDrink}</h1>

              <div className="flex flex-col">
                <h2 className="font-semibold text-lg">Ingredients</h2>

                {
                  Object.keys(data).map((v, i) => {
                    const reg = /strIngredient(.*)/g;

                    if(reg.test(v) && data[v] !== null) return <span key={`ing_${i}`} className="text-base">{data[v]}</span>;
                    return <></>
                  })
                }
              </div>

              <div className="flex flex-col">
                <h2 className="font-semibold text-lg">Glass</h2>

                {
                  Object.keys(data).map((v, i) => {
                    const reg = /strGlass(.*)/g;

                    if(reg.test(v) && data[v] !== null) return <span key={`glass_${i}`} className="text-base">{data[v]}</span>;
                    return <></>
                  })
                }
              </div>

              <div className="flex flex-col">
                <h2 className="font-semibold text-lg">Instructions</h2>

                <p className="text-base">{ data["strInstructions"] }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { DetailContent };
