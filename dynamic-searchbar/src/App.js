import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";

function App() {
  const [state, setState] = useState({ people: [], searchField: "" });
  console.log("state :",state);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setState({...state, people: response.data});
    };
    getData();
  }, []);

  const onSearchChange = (e) => {
    e.preventDefault();
    setState({...state, searchField: e.target.value.toLowerCase()})
  }

  const filteredNames = state.people.filter((person) => person.name.toLowerCase().includes(state.searchField))


  return (
    <div className="App">
      <h1 className="app-title">+1 Searchbar Mechanic</h1>
      <SearchBox onSearchChange={onSearchChange}/>
      <CardList people={filteredNames} />
    </div>
  );
}

export default App;
