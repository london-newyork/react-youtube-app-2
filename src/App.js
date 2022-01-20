import './App.css';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import { Top } from './pages/Top'
import { Search } from './pages/Search';
import { Watch } from './pages/Watch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Router> */}
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/watch" component={Watch} />
        </Switch>
      {/* </Router> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
