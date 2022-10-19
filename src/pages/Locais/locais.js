import React, {useState, useEffect} from "react";
import Header from "../../components/header/header";
import InputField from "../../components/input-field/input-field";
import './locais.css';
import Card from "../../components/card/card";

const Locais = () => {
  const [filter, setFilter] = useState("");
  const [filterList, setFilterList] = useState([]);

  const getInputFromComponent = (data) => {
    setFilter(data.toLowerCase());
  };

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
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
        <div className="locais-container">
          <Card
            key={item.id}
            title={item.name}
            description={item.climate}
          />
        </div>
      ))}
    </>
  );
};

export default Locais;
