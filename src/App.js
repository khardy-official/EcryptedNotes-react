import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';

function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/create" component={Create}/>
          <Route exact path="/note/" component={Note}/>
          <Route exact path="/note/:noteURL" component={Note}/>
          <Route path="" component={Error}/>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
