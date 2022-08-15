import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`,
    );
    // console.log(api);
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
    // console.log(popular);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
