import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/header";

function App() {
  const [filmsList, setFilmsList] = useState();

  useEffect(() => {
    let mounted = true;
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then((response) => response.json())
      .then((data) => {
        if(mounted) {
          setFilmsList(data);
        }
      });
    return () => (mounted = false);
  }, []);

  console.log(filmsList);  
  return (
    <div className="App"> 
      <Header />
    </div>
  );
}

export default App;
