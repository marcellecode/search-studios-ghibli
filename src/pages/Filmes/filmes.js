import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import InputField from "../../components/input-field/input-field";
import Card from "../../components/card/card";
import "./filmes.css";

const Filmes = () => {
  const [filter, setFilter] = useState("");
  const [filterList, setFilterList] = useState([]);

  const getInputFromComponent = (data) => {
    setFilter(data.toLowerCase());
  };

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then((response) => response.json())
      .then((data) => {
        let dataFilter = data.filter((film) =>
          film.title.toLowerCase().includes(filter)
        );
        setFilterList(dataFilter);
      });
  }, [filter]);

  return (
    <>
      <Header />
      <InputField getInputFromComponent={getInputFromComponent} />
        
      <div className="films-container">
        {filterList.map((item) => (
          <Card
            key={item.id}
            urlImage={item.movie_banner}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default Filmes;
