import "./styles.css";
import Header from "./components/Header";
import { useState } from "react";
export default function App() {
  const movies = ["kagaz", "kalam", "Jab We Met", "raazi"];
  const foods = ["kachori", "samosa", "jalebi", "rasogulla"];
  const books = [
    "Meluha",
    "The book of ram",
    "The subtle art of not giving a f*ck",
    "Eat That frog"
  ];
  const [list, setList] = useState(movies);
  const clickHandler = (value) => {
    setList(value);
  };
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="btn-div">
        <button onClick={() => clickHandler(movies)}>Movies</button>
        <button onClick={() => clickHandler(foods)}>Foods</button>
        <button onClick={() => clickHandler(books)}>Books</button>
      </div>
      <div className="output-div">
        {list.map((ele, index) => (
          <p key={index}>{ele}</p>
        ))}
      </div>
    </div>
  );
}
