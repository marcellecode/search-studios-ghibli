import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import InputField from "../../components/input-field/input-field";
import './atores.css'
const Atores = () => {
  const [filter, setFilter] = useState("");
  const [filterList, setFilterList] = useState([]);

  const getInputFromComponent = (data) => {
    setFilter(data.toLowerCase());
  };

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => {
        let dataFilter = data.filter((ator) =>
          ator.name.toLowerCase().includes(filter)
        );
        setFilterList(dataFilter);
      });
  }, [filter]);

  return (
    <>
      <Header />
      <InputField getInputFromComponent={getInputFromComponent} />
      {filterList.map((item) => (
        <div className="atores-container">
            <h3 key={item.id}>{item.name}</h3>
        </div>
      ))}
    </>
  );
};

export default Atores;
