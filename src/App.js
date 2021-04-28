import TodoFeature from "./features/Todo"
import AlbumFeature from "./features/Album"
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      Home pages
      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p>
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>


    </div>
  );
}

export default App;
