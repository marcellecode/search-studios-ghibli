import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import InputField from "../../components/input-field/input-field";

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
      <button>Search</button>
      {filterList.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </>
  );
};

export default Filmes;
