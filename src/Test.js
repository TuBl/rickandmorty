import { Switch, Route } from 'react-router-dom'
import CharectersList from './components/CharectersList'
import CharecterPreview from './components/CharecterPreview'
import NavBar from './components/NavBar';
function Test() {
  return (
    
    <div className="main-layout">
      <NavBar></NavBar>
      <div className = "main-layout__content">
        <Switch>
          <Route exact path = "/charecter/:id" component={CharecterPreview}></Route>
          <Route path = "/" component={CharectersList}></Route>
          <Route path = "/" component={CharectersList}></Route>
        </Switch>
      </div>

    </div>
  );
}

export default Test;
