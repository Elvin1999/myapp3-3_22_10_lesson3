import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import PackingList from "./PackingList";
import "./App.css";
import ListItems from "./ListItems/ListItems";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      {/* <PackingList></PackingList> */}
      <ListItems></ListItems>
    </div>
  );
}

export default App;
