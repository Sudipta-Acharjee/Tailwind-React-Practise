import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';
import Navbar from './Components/Navbar';
import Notfound from './pages/Notfound';
import { Switch } from 'react-router';

function App() {
  return (
    <Router>
      <div><Navbar /></div>
      <div className="max-w-screen-md mx-auto pt-20">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/articleList" component={ArticleList} />
          <Route exact path="/article/:name" component={Article} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
