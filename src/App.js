import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Top } from './pages/Top'
import { Search } from './pages/Search';
import { Watch } from './pages/Watch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/watch" component={Watch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
